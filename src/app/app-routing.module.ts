import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';

const routes: Routes = [
  {path : '', redirectTo:'login', pathMatch:'full'},
  {path : 'login' , component:LoginFormComponent},
  {path : 'reactive-form' , component:ReactiveFormComponent},
  {path:'**' , component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
