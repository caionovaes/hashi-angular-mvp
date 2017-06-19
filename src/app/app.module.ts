import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './shared/auth.service';
import { HeaderComponent } from './auth/header/header.component';
import { AuthGuard } from './shared/auth-guard.service';
import {
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';
import { GigComponent } from './gig/gig.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SetlistItemComponent } from './gig/setlist-item/setlist-item.component';
import { AboutComponent } from './about/about.component';
import { SortPipe } from './shared/pipes/sort.pipe';
import { PickerPipe } from './shared/pipes/picker.pipe';
import { SetlistRequestDialogComponent } from './gig/setlist-request-dialog/setlist-request-dialog.component';

export const routes: Routes = [
  {path: '', redirectTo: '/gig', pathMatch: 'full'},
  {path: 'gig', component: GigComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    GigComponent,
    SetlistItemComponent,
    AboutComponent,
    SortPipe,
    PickerPipe,
    SetlistRequestDialogComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdSnackBarModule,
    MdListModule,
    MdInputModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdCardModule,
    MdDialogModule
  ],
  providers: [AuthService, AuthGuard],
  entryComponents: [SetlistRequestDialogComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
}
