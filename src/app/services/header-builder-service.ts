import { Injectable } from '@angular/core';
import {MyCookieService} from './my-cookie-service';
import {HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeaderBuilderService {
  constructor(private myCookieService: MyCookieService) {
  }
  getBaseHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',   // Пример 1: Content-Type (обычно уже установлен HttpClient)
      'Authorization': `Bearer ${this.myCookieService.getCookie('token')}`  // Пример 3:  Заголовок Authorization (если необходимо)
    });
  }
}
