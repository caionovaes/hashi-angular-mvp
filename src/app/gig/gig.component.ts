import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gig',
  templateUrl: './gig.component.html',
  styleUrls: ['./gig.component.css']
})
export class GigComponent implements OnInit {

  performer: boolean;
  songs: FirebaseListObservable<any[]>;
  live: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.performer = this.authService.performer;
    this.songs = this.db.list('/show/songs');
    this.live = this.db.object('/show/live');
  }

  onSignInClicked() {
    this.router.navigate(['/signin']);
  }

  onSignUpClicked() {
    this.router.navigate(['/signup']);
  }

  onLogoutClicked() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  isPerformer() {
    return this.authService.isPerformer();
  }

}
