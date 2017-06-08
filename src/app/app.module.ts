import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuard } from './services/auth-guard.service';
import {
  MdButtonModule, MdIconModule, MdInputModule, MdListModule, MdMenuModule, MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';
import { GigComponent } from './components/gig/gig.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyCP8Yylqm_Kw6-mT0TDkFoyoTbtY7rpUwc',
  authDomain: 'hashi-b963d.firebaseapp.com',
  databaseURL: 'https://hashi-b963d.firebaseio.com',
  projectId: 'hashi-b963d',
  storageBucket: 'hashi-b963d.appspot.com',
  messagingSenderId: '933922103648'
};

export const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'gig', component: GigComponent, canActivate: [AuthGuard]},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    GigComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdSnackBarModule,
    MdListModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule
  ],
  providers: [AngularFireAuth, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {

}
