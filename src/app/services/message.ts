import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ControllerService} from './controller-service';

@Injectable({
  providedIn: 'root'
})
export class Message {
  constructor(private http: HttpClient, private controller: ControllerService) {}

  sendMessage (message: any) {
      let messageJson = {
        "message": message
      };
      return this.http.post(`${this.controller.getBaseUrl()}/send/message/1`, messageJson);
  }

  getMessages () {
      return this.http.get(`${this.controller.getBaseUrl()}/get/messages/1`);
  }
}
