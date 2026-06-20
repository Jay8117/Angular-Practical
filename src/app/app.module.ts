import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldComponent } from './pages/dynamic-field/dynamic-field.component';
import { HomeComponent } from './pages/home/home.component';
import { ParentChildComponent } from './pages/parent-child/parent-child.component';
import { ChildComponent } from './pages/parent-child/child/child.component';
import { ChildParentComponent } from './pages/child-parent/child-parent.component';
import { ChildrenComponent } from './pages/child-parent/children/children.component';
import { ErrorHandlingComponent } from './pages/error-handling/error-handling.component';
import { ViewChildComponent } from './pages/view-child/view-child.component';
import { ViewChildrenComponent } from './pages/view-child/view-children/view-children.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReactiveFormComponent,
    LoginFormComponent,
    ErrorPageComponent,
    DynamicFieldComponent,
    HomeComponent,
    ParentChildComponent,
    ChildComponent,
    ChildParentComponent,
    ChildrenComponent,
    ErrorHandlingComponent,
    ViewChildComponent,
    ViewChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
