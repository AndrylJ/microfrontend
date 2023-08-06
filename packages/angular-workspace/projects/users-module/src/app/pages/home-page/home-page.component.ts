import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ApiResponse } from 'projects/core/models/ApiResponse';
import { User } from 'projects/core/models/User';
import { environment } from 'projects/users-module/src/environments/environments.prod';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent {
  title = 'Usuarios';
  data: User[] = [];

  http = inject(HttpClient)

  getTableColumns() {
    return { name: 'Nombre', lastName: 'Apellido', email: 'Email', actions: 'Acciones' };
  }

  getTableRow() {
    return this.data.map(item => ({
      name: 'Andryl',
      lastName: 'Jimenez',
      email: 'andry.jimenez@gmail.com',
      actions: 'Hola'
    }));
  }

  getFormRoute(uuid?: string) {
    return `/usuarios/${uuid ? '/' + uuid : 'crear'}`;
  }

  deleteUser(uuid: string) {
    this.http.delete<ApiResponse<User>>(`${environment.API_URL}/v1/users/${uuid}`)
      .subscribe((response) => {
        this.loadUsers();
      })
  }

  loadUsers() {
    this.http.get<ApiResponse<User[]>>(`${environment.API_URL}/v1/users`)
      .subscribe((response) => {
        this.data = response.data;
      })
  }

  ngOnInit() {
    this.loadUsers()
  }
}
