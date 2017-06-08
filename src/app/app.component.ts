import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {

    firebase.initializeApp({
      apiKey: 'AIzaSyCP8Yylqm_Kw6-mT0TDkFoyoTbtY7rpUwc',
      authDomain: 'hashi-b963d.firebaseapp.com',
      databaseURL: 'https://hashi-b963d.firebaseio.com'
    });

    firebase.auth().onAuthStateChanged((user) => {
      console.log('user', user);
      if (user) {
        this.authService.getToken();
      }
    });
  }
}
