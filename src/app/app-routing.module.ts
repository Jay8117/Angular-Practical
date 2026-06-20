import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { DynamicFieldComponent } from './pages/dynamic-field/dynamic-field.component';
import { HomeComponent } from './pages/home/home.component';
import { ParentChildComponent } from './pages/parent-child/parent-child.component';
import { ChildParentComponent } from './pages/child-parent/child-parent.component';
import { ErrorHandlingComponent } from './pages/error-handling/error-handling.component';
import { ViewChildComponent } from './pages/view-child/view-child.component';

const routes: Routes = [
  {path : '', redirectTo:'home', pathMatch:'full'},
  {path : 'login' , component:LoginFormComponent},
  {path : 'reactive-form' , component:ReactiveFormComponent},
  {path : 'dynamic-field' , component:DynamicFieldComponent},
  {path : 'home' , component:HomeComponent},
  {path : 'parent-child' , component:ParentChildComponent},
  {path : 'child-parent' , component:ChildParentComponent},
  {path : 'error-handling' , component:ErrorHandlingComponent},
  {path:'view-child' , component:ViewChildComponent},
  {path:'**' , component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
