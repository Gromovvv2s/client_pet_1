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
  @ViewChild("container_messages", { static: true }) container!: ElementRef;
  message: any;
  listMessages = ["1", "2"];

  constructor(private messageService: Message, private renderer: Renderer2) {

  }

  ngAfterViewInit(): void {
  }

  createMessagesElements() {
    console.log("container: " + this.container);
      const div = this.renderer.createElement('div');
      const text = this.renderer.createText('New div');
      this.renderer.appendChild(div, text);
      this.renderer.addClass(div, 'right'); // Optional: Add a CSS class
      this.renderer.appendChild(this.container.nativeElement, div);
  }


  sendMessage() {
    console.log("be send message... " + this.message);
    this.messageService.sendMessage(this.message).subscribe({
      next:(data: any)=> {
        console.log(data);
        this.createMessagesElements();
      },
      error:(data)=> {
        console.error(data);
      }
    })
  }

  getMessages() {
    this.messageService.getMessages().subscribe({
      next:(data: any)=> {
        for (const message of data) {
          console.log(message);
        }

      },
      error:(data)=> {
        console.error(data);
      }
    })
  }
}

