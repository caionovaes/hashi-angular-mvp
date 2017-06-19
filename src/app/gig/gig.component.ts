import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Show } from '../shared/show.model';
import { Song } from '../shared/song.model';

@Component({
  selector: 'app-gig',
  templateUrl: './gig.component.html',
  styleUrls: ['./gig.component.css']
})
export class GigComponent implements OnInit, OnDestroy {

  performer: boolean;
  shows: FirebaseListObservable<Show[]>;
  show: FirebaseObjectObservable<Show>;
  songs: FirebaseListObservable<Song[]>;

  constructor(private db: AngularFireDatabase, public authService: AuthService) {
  }

  ngOnInit() {
    this.performer = this.authService.performer;
    this.shows = this.db.list('/shows');
    this.show = this.db.object('/shows/main');
    this.songs = this.db.list('/shows/main/songs');
  }

  onLogoutClicked() {
    this.authService.logout();
  }

  toggleLive(live: boolean) {
    this.show.update({live: live});
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  isPerformer() {
    return this.authService.isPerformer();
  }


  ngOnDestroy(): void {
    this.performer = false;
  }
}
