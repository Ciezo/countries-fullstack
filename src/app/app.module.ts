import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCountryComponent } from './show-country/show-country.component';
import { ShowDogsComponent } from './show-dogs/show-dogs.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
import { FrontPageUserComponent } from './front-page-user/front-page-user.component';
import { FrontPageAdminComponent } from './front-page-admin/front-page-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { ShowCountriesComponent } from './show-countries/show-countries.component';
import { CreateDogComponent } from './create-dog/create-dog.component';
import { EditDogComponent } from './edit-dog/edit-dog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ShowCountryComponent,
    ShowCountriesComponent,
    ShowDogsComponent,
    ShowUsersComponent,
    ConfirmPageComponent,
    FrontPageUserComponent,
    FrontPageAdminComponent,
    LoginUserComponent,
    LoginAdminComponent,
    LandingPageComponent,
    CreateDogComponent,
    EditDogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
