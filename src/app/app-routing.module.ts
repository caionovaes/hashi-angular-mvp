import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoungeComponent} from './components/lounge/lounge.component';
import {SigninComponent} from './components/auth/signin/signin.component';
import {SignupComponent} from './components/auth/signup/signup.component';
import {AuthGuard} from './services/auth-guard.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/lounge', pathMatch: 'full'},
  {path: 'lounge', component: LoungeComponent, canActivate: [AuthGuard]},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
