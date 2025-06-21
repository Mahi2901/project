import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'; // ✅ Import FormsModule



@Component({
  selector: 'app-todo',
  imports: [CommonModule,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

public allValues : any[] = [];
public inputvalue! : string  ;

addValueInTable(){
 this.allValues.push(this.inputvalue)
 this.inputvalue = "";
}

deleteTheRow(index : number){
  this.allValues.splice(index,1)
}
}
