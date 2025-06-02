
import { Component, input } from '@angular/core';
import {AppComponent} from '../app.component'; // ✅ Import AppComponent
import {FormsModule} from '@angular/forms'; // ✅ Import FormsModule
import {SecondComponent} from '../second/second.component'; // ✅ Import SecondComponent

import { Router } from '@angular/router'; // ✅ Import Router

@Component({
  selector: 'app-first',
  imports: [FormsModule], // ✅ Import SecondComponent and FormsModule
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  name: string = 'MaheshWaran';
  title : string = "Hello Mahesh !";

  changTitle() {
    this.title ="Title Changed By Button Click";
    alert ("hi changed the title")
  }
  imgUrl = "https://www.w3schools.com/w3images/lights.jpg";

  isDisabled: any = false; 
  
  readonly myName = input<string>(''); // ✅ Use @Input() decorator  Receiving value from parent

}
