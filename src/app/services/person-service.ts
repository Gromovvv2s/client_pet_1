import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ControllerService} from './controller-service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private http: HttpClient, private controller: ControllerService){}

  getFriends(idPerson:any) {
      return this.http.get(`${this.controller.getBaseUrl()}/person/${idPerson}/friends`);
  }
}
