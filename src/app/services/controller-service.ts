import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  baseUrl = "http://localhost:8082/v1"

  getBaseUrl() {
    return this.baseUrl;
  }
}
