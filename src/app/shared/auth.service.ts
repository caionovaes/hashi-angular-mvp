import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Injectable()
export class AuthService implements OnInit, OnDestroy {
  token: string;

  constructor(private afAuth: AngularFireAuth, private router: Router, private snackBar: MdSnackBar) {
  }

  ngOnInit(): void {
    this.token = null;
    this.idTokenSub = this.afAuth.idToken.subscribe(
      (user) => {
        if (user) {
          console.log('so we got somethin... lets do it!');
          this.router.navigate(['/signin'])
        } else {
          console.log('wut? empty user... whatever');
          this.token = null;
          this.router.navigate(['/signin'])
        }
      },
      (error) => {
        console.log('some bizarre error has ocurred');
        this.token = null;
        this.router.navigate(['/signin'])
      },
      () => {
        console.log('authentication monitoring completed, I guess')
        this.token = null;
      }
    );
  }

  signupUser(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
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
    // this.logout();
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        response => {
          console.log('great success bra, logged in', response)
          // this.router.navigate(['/gig']);
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
          })
        }
      );
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isAuthenticated() {
    return this.token != null;
  }

  ngOnDestroy(): void {
  }
}
