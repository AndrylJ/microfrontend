import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'projects/user-admin-app/src/environments/environments.prod';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {
  usersTableUrl: SafeResourceUrl;
  homeRoute = '/';

  constructor(private domSanitizer : DomSanitizer) {
    this.usersTableUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(environment.USERS_MODULE);
  }
}
