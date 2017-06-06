import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {LoungeComponent} from './components/lounge/lounge.component';
import {SetlistComponent} from './components/setlist/setlist.component';
import {SetlistItemComponent} from './components/setlist/setlist-item/setlist-item.component';
import {SetlistAddComponent} from './components/setlist/setlist-add/setlist-add.component';
import {MdButtonModule, MdInputModule, MdListModule, MdSnackBarModule} from '@angular/material';
import {SigninComponent} from './components/auth/signin/signin.component';
import {SignupComponent} from './components/auth/signup/signup.component';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoungeComponent,
    SetlistComponent,
    SetlistItemComponent,
    SetlistAddComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdSnackBarModule,
    MdListModule,
    MdInputModule,
    MdButtonModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
