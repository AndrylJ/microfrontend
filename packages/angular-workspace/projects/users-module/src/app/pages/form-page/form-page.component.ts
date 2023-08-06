import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'projects/core/models/ApiResponse';
import { User } from 'projects/core/models/User';
import { environment } from 'projects/users-module/src/environments/environments.prod';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.sass']
})
export class FormPageComponent {
  title = "Crear usuario"
  uuid?: string
  http = inject(HttpClient)
  formGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.uuid = route.snapshot.params['uuid']
    this.uuid && (this.title = "Actualizar usario")
    this.formGroup = this.formBuilder.group({
      name: '',
      lastName: '',
      email: '',
      birthdate: '',
    });
  }

  handleInputChange(value: string) {
    console.log(value)
  }

  loadUser(uuid: string) {
    this.http.get<ApiResponse<User>>(`${environment.API_URL}/v1/users/${uuid}`)
      .subscribe((response) => {
        this.formGroup.setValue({
          name: response.data.name,
          lastName: response.data.lastName,
          email: response.data.email,
          birthdate: response.data.birthdate,
        })
      })
  }

  createUser(data: object) {
    this.http.post<ApiResponse<User>>(`${environment.API_URL}/v1/users`, data)
      .subscribe((response) => {
        this.router.navigate(['/'])
      })
  }

  updateUser(uuid: string, data: object) {
      this.http.patch<ApiResponse<User>>(`${environment.API_URL}/v1/users/${uuid}`, data)
      .subscribe((response) => {
        this.router.navigate(['/'])
      })
  }


  handleSubmit(data: object, uuid?: string) {
    if (uuid) {
      this.updateUser(uuid, data)
      return;
    }
    this.createUser(data)
  }

  ngOnInit() {
    if (this.uuid) {
      this.loadUser(this.uuid)
    }
  }
}
