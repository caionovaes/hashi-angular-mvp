import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Song } from '../../shared/models/song.model';
import { AngularFireDatabase } from 'angularfire2/database';
import slugify from 'slugify';

@Component({
  selector: 'app-setlist-request-dialog',
  templateUrl: './setlist-request-dialog.component.html',
  styleUrls: ['./setlist-request-dialog.component.css']
})
export class SetlistRequestDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<SetlistRequestDialogComponent>, private db: AngularFireDatabase) {
  }

  ngOnInit() {
  }

  requestSong(form: NgForm) {
    const artist = form.value.artist;
    const name = form.value.song;
    const song = new Song(name, artist, 0, false);
    const slug = slugify((name + ' ' + artist).toLowerCase());
    this.db.app.database().ref('shows/main/songs').child(slug).set(song);
    this.dialogRef.close();
  }
}
