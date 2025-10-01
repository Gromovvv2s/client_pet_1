import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Message} from '../../services/message';

@Component({
  standalone: true,
  selector: 'app-test',
  imports: [FormsModule],
  templateUrl:'./test.html',
  styleUrl: './test.css'
})

export class Test implements AfterViewInit {
  @ViewChild('container_messages', { static: true }) containerMessages!: ElementRef;
  message: any;

  constructor(private messageService: Message, private renderer: Renderer2) {

  }

  ngAfterViewInit(): void {
    this.getMessages();
  }

  createMessagesElements(messages:any) {
    this.containerMessages.nativeElement.innerHTML = '';

    for (const message of messages) {
      const div = this.renderer.createElement('div');
      const text = this.renderer.createText(message['message']);
      this.renderer.appendChild(div, text);

      const author = message['author'];
      if (author == "a") {
        this.renderer.addClass(div, 'left');
      } else {
        this.renderer.addClass(div, 'right');
      }
      this.renderer.appendChild(this.containerMessages.nativeElement, div);
    }
  }


  sendMessage() {
    console.log("be send message... " + this.message);
    this.messageService.sendMessage(this.message).subscribe({
      next:(data: any)=> {
        console.log(data);
      },
      error:(data)=> {
        console.error(data);
      }
    })
  }

  getMessages() {
    this.messageService.getMessages().subscribe({
      next:(data: any)=> {
        this.createMessagesElements(data);
      },
      error:(data)=> {
        console.error(data);
      }
    })
  }
}

