import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { ComponentLibraryModule } from 'component-library';
import { PersonComponent } from './icons/person/person.component';
import { OpenFolderComponent } from './icons/open-folder/open-folder.component';
import { PasswordComponent } from './icons/password/password.component';
import { PeopleComponent } from './icons/people/people.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    PersonComponent,
    OpenFolderComponent,
    PasswordComponent,
    PeopleComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentLibraryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
