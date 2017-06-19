import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../../shared/models/song.model';
import slugify from 'slugify';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { Info } from '../../shared/models/info.model';

@Component({
  selector: 'app-setlist-item',
  templateUrl: './setlist-item.component.html',
  styleUrls: ['./setlist-item.component.css']
})
export class SetlistItemComponent implements OnInit {

  @Input() song: Song;
  @Input() performer: boolean;
  liked: FirebaseObjectObservable<Info>;
  slugified: string;

  constructor(private db: AngularFireDatabase, private authService: AuthService, private router: Router, private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.slugified = slugify((this.song.name + ' ' + this.song.artist).toLowerCase());
    this.liked = this.db.object('/shows/main/attendees/' + this.authService.uid + '/' + this.slugified);
  }

  toggleSongLiked(liked: boolean) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/signin']);
      this.snackBar.open('Quer interagir? Massa! Só se cadastrar e entrar.', '', {duration: 2000});
    } else {
      if (liked) {
        this.db.app.database().ref('shows/main/songs')
          .child(this.slugified)
          .update({likes: (this.song.likes + 1)})
      } else {
        this.db.app.database().ref('shows/main/songs')
          .child(this.slugified)
          .update({likes: (this.song.likes - 1)})
      }
      this.db.app.database().ref('shows/main/attendees')
        .child(this.authService.uid)
        .child(this.slugified)
        .set(new Info(this.slugified, liked));
    }
  }

  toggleSongPlayed() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/signin']);
      this.snackBar.open('Quer interagir? Massa! Só se cadastrar e entrar.', '', {duration: 2000});
    } else {
      this.db.app.database().ref('shows/main/songs')
        .child(this.slugified)
        .update({played: !this.song.played});
    }
  }

  getStyle() {
    if (this.song.played) {
      return 'lightgray';
    } else {
      return '';
    }
  }
}
