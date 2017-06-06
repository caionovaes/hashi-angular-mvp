import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {
  MdButtonModule, MdButtonToggleModule, MdCardModule, MdInputModule, MdListModule, MdRadioModule,
  MdToolbarModule
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoungeComponent } from './lounge/lounge.component';
import { GigComponent } from './gig/gig.component';
import { SetlistComponent } from './setlist/setlist.component';
import { GigNewComponent } from './gig-new/gig-new.component';
import { SetlistItemComponent } from './setlist/setlist-item/setlist-item.component';
import { SetlistAddComponent } from './setlist/setlist-add/setlist-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LoungeComponent,
    GigComponent,
    SetlistComponent,
    GigNewComponent,
    SetlistItemComponent,
    SetlistAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdListModule, MdButtonModule, MdCardModule,
    MdToolbarModule, MdInputModule, MdButtonToggleModule,
    MdRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
