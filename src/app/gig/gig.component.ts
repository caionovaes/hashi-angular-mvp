import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Show } from '../shared/models/show.model';
import { Song } from '../shared/models/song.model';
import { MdDialog, MdSnackBar } from '@angular/material';
import { SetlistRequestDialogComponent } from './setlist-request-dialog/setlist-request-dialog.component';
import { Router } from '@angular/router';

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

  constructor(private db: AngularFireDatabase, private authService: AuthService,
              private dialog: MdDialog, private router: Router, private snackBar: MdSnackBar) {
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

  toggleDynamic(dynamic: boolean) {
    this.show.update({dynamic: dynamic});
  }

  fabClicked() {
    if (this.authService.isAuthenticated()) {
      this.dialog.open(SetlistRequestDialogComponent);
    } else {
      this.router.navigate(['/signin']);
      this.snackBar.open('Quer interagir? Massa! Só se cadastrar e entrar.', '', {duration: 3000});
    }
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
