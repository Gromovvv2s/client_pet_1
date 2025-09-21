import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ControllerService} from './controller-service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient, private controller: ControllerService) {
  }
  login (username: any, password: any) {
    let loginJson = {
      "username": username,
      "password": password
    };
    return this.http.post(`${this.controller.getBaseUrl()}/login`, loginJson);
  }
}
