import { Component } from '@angular/core';
import { environment } from 'projects/user-admin-app/src/environments/environments.prod';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.sass']
})
export class UsersPageComponent {
  usersTableUrl: SafeResourceUrl;

  constructor(private domSanitizer : DomSanitizer) {
    this.usersTableUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(environment.USERS_MODULE);
  }
}
