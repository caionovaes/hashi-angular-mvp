import {NgModule} from '@angular/core';
import {MdButtonModule, MdInputModule, MdListModule, MdSnackBarModule, MdToolbarModule} from '@angular/material';

@NgModule({
  exports: [MdSnackBarModule, MdListModule, MdInputModule, MdButtonModule, MdToolbarModule]
})

export class AppMaterialModule {
}
