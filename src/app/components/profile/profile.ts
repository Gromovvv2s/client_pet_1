import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {PersonService} from '../../services/person-service';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})

export class Profile implements AfterViewInit {

  @ViewChild('container_friends', { static: true }) containerFriends!: ElementRef;

  friends: string[];

  constructor(private renderer: Renderer2, private personService: PersonService) {
    this.friends = [];
    this.getFriendsFromServer(2);
    console.log(this.friends);
  }

  //метод отрабатывает, когда статический html будет готов
  ngAfterViewInit(): void {
    this.createFriendsElements(this.friends);

  }

  getFriendsFromServer(idPerson:any) {
    this.personService.getFriends(idPerson).subscribe({
     next:(data: any)=> {
       console.log(data);
       //получив список друзей, мы его запишем в переменную friends этого класса
       this.friends = data;
     },
     error:(data)=> {
       console.error("не получен список друзей");
     }
    })
  }




  createFriendsElements(friends: any) {
      this.containerFriends.nativeElement.innerHTML = '';
      for (const friend of friends) {
        const div = this.renderer.createElement('div');
        const text = this.renderer.createText(friend);
        this.renderer.appendChild(div, text);

        const button = this.renderer.createElement('button');
        const textButton = this.renderer.createText('написать');
        this.renderer.appendChild(button, textButton);

        this.renderer.appendChild(div, button);

        this.renderer.appendChild(this.containerFriends.nativeElement, div);
      }
    }
}
