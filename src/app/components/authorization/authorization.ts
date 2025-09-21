import { Component } from '@angular/core';
import {AuthorizationService} from '../../services/authorization-service';
import {FormsModule} from '@angular/forms';
import {MyCookieService} from '../../services/my-cookie-service';


@Component({
  selector: 'app-authorization',
  imports: [
    FormsModule
  ],
  templateUrl: './authorization.html',
  styleUrl: './authorization.css'
})
export class Authorization {
  testData: any;
  username: any;
  password: any;
  constructor(private authService: AuthorizationService, private myCookieService: MyCookieService) {

  }
  login() {
    this.authService.login(this.username, this.password).subscribe({
      next:(data: any)=> {
        console.log(data);
        this.myCookieService.setCookie('token', data['token']);
        window.location.href='/index'
      },
      error:(data)=> {
        console.error(data);
        alert(data);
      }
    })
  }
}
