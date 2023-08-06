import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentLibraryModule } from 'component-library';
import { DeleteComponent } from './icons/delete/delete.component';
import { EditComponent } from './icons/edit/edit.component';
import { PlusComponent } from './icons/plus/plus.component';
import { FormDirective } from './form-directive.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FormPageComponent,
    DeleteComponent,
    EditComponent,
    PlusComponent,
    FormDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentLibraryModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
