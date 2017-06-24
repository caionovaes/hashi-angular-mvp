import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { Show } from '../../shared/models/show.model';

@Component({
  selector: 'app-show-archive-dialog',
  templateUrl: './show-archive-dialog.component.html',
  styleUrls: ['./show-archive-dialog.component.css']
})
export class ShowArchiveDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<ShowArchiveDialogComponent>, private db: AngularFireDatabase, private snackBar: MdSnackBar) {
  }

  ngOnInit() {
  }

  confirmArchive() {
    this.db.app.database().ref('shows').once(
      'value',
      snapshot => {
        if (snapshot.val()) {
          const mainShow: Show = snapshot.val().main;
          const vanillaShow: Show = new Show(false, [], [], false);
          this.db.app.database().ref('shows').push(mainShow);
          this.db.app.database().ref('shows').child('main').set(vanillaShow);
          this.snackBar.open('Seu show foi resetado com sucesso.', '', {duration: 3000});
        } else {
          this.snackBar.open('Peço desculpas pela inconveniência mas o show não pode ser resetado.', '', {duration: 3000});
        }
        this.dialogRef.close();
      }
    );
  }

  cancelArchive() {
    this.dialogRef.close();
  }

}
