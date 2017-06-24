import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Song } from '../../shared/models/song.model';
import { AngularFireDatabase } from 'angularfire2/database';
import slugify from 'slugify';
import { GoogleAnalyticsEventsService } from '../../shared/google-analytics-events.service';

@Component({
  selector: 'app-setlist-request-dialog',
  templateUrl: './setlist-request-dialog.component.html',
  styleUrls: ['./setlist-request-dialog.component.css']
})
export class SetlistRequestDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<SetlistRequestDialogComponent>, private db: AngularFireDatabase,
              private snackBar: MdSnackBar, private googleAnalyticsEventsService: GoogleAnalyticsEventsService) {
  }

  ngOnInit() {
  }

  requestSong(form: NgForm) {
    const artist = form.value.artist;
    const name = form.value.song;
    const slug = slugify((name + ' ' + artist).toLowerCase());

    this.db.app.database().ref('shows/main/songs').child(slug).once(
      'value',
      snapshot => {
        let song: Song = snapshot.val();

        if (song) {
          if (!song.active) {
            this.snackBar.open('Desculpe mas ' + song.name + ' de ' + song.artist + ' foi removida pelo artista.', '', {duration: 3000});
          } else {
            this.snackBar.open(song.name + ' de ' + song.artist + ' já existe.', '', {duration: 3000});
          }
        } else {
          song = new Song(name, artist, 0, false, true);
          this.db.app.database().ref('shows/main/songs').child(slug).set(song);
          this.snackBar.open(song.name + ' de ' + song.artist + ' foi adicionada.', '', {duration: 2000});
          this.googleAnalyticsEventsService.emitEvent('Request', 'Songs', slug);
        }

        this.dialogRef.close();
      }
    );
  }
}
