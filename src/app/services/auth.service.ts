import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {MdSnackBar} from '@angular/material';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router, private snackBar: MdSnackBar) {
    this.token = null;
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => this.snackBar.open('Conta criada com sucesso.', '', {
          duration: 1000
        })
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

          this.snackBar.open(message, '', {
            duration: 1000
          });
        }
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => {
          console.log(error);
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

          this.snackBar.open(message, '', {
            duration: 1000
          });
        }
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
