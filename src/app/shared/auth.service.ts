import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService implements OnInit, OnDestroy {

  token: string;
  performer: boolean;
  uid: string;

  constructor(private afAuth: AngularFireAuth, private router: Router, private snackBar: MdSnackBar) {
  }

  ngOnInit(): void {
    this.token = null;
    this.uid = null;
    this.performer = false;
  }

  signupUser(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
          this.snackBar.open('Conta criada com sucesso.', '', {duration: 1000});
          this.router.navigate(['/signin']);
        }
      )
      .catch(
        error => {
          let message = 'O que está acontecendo?';

          switch (JSON.parse(JSON.stringify(error)).code) {
            case 'auth/invalid-email':
              message = 'Informe um e-mail válido.';
              break;
            case 'auth/weak-password':
              message = 'A senha deve ter no mínimo 6 caracteres.';
              break;
            case 'auth/email-already-in-use':
              message = 'Já existe uma conta com esse e-mail.';
              break;
          }

          this.snackBar.open(message, '', {duration: 1000});
        }
      );
  }

  signinUser(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        (user: firebase.User) => {
          if (user.email === 'musico@hashi.com') {
            this.performer = true;
          }
          this.uid = user.uid;
          this.getToken();
          this.router.navigate(['/gig']);
        }
      )
      .catch(
        error => {
          let message = 'O que está acontecendo?';

          switch (JSON.parse(JSON.stringify(error)).code) {
            case 'auth/invalid-email':
              message = 'Informe um e-mail válido.';
              break;
            case 'auth/weak-password':
              message = 'A senha deve ter no mínimo 6 caracteres.';
              break;
            case 'auth/wrong-password':
              message = 'Senha incorreta, tente novamente.';
              break;
            case 'auth/user-not-found':
              message = 'E-mail não cadastrado, confirme seu e-mail.';
              break;
          }

          this.snackBar.open(message, '', {duration: 1000});
        }
      );
  }

  logout() {
    this.afAuth.auth.signOut();
    this.token = null;
    this.uid = null;
    this.performer = false;
    this.router.navigate(['/signin']);
  }

  getToken() {
    this.afAuth.auth.currentUser.getIdToken()
      .then((token: string) => this.token = token);
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  isPerformer() {
    return this.performer;
  }

  ngOnDestroy(): void {
    this.token = null;
    this.uid = null;
    this.performer = false;
  }
}
