import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ControllerService} from './controller-service';
import {HeaderBuilderService} from './header-builder-service';

@Injectable({
  providedIn: 'root'
})

export class IndexService {
  constructor(private http: HttpClient, private controller: ControllerService, private headerBuilderService: HeaderBuilderService) {
  }
  getIndex() {
    return this.http.get(`${this.controller.getBaseUrl()}/index`, {
      headers: this.headerBuilderService.getBaseHeader()
    })
  }
}
