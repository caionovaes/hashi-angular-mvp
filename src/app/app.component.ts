import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyCP8Yylqm_Kw6-mT0TDkFoyoTbtY7rpUwc',
      authDomain: 'hashi-b963d.firebaseapp.com',
      databaseURL: 'https://hashi-b963d.firebaseio.com'
    })
  }
}
