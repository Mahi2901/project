import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgClass, NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-second',
  imports: [FormsModule , CommonModule ],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
})
export class SecondComponent {
  public nameFromParent = 'Maheshwaran'; // This will be passed to FirstComponent as an input property
  
  public isHot : any = false ;

  public isHappy : boolean = true ;

  public day = '';

  public  items : number [] = [2,3,4,5,6,7,8] ;

  public serialNumber: number = 1;
  public namee: string = '';
  public age: number = 0;
  public deparment: string = '';
   
  public submittedData: any[] = [];

  public formSubmitted() {
    const newEntery = {
      serialNumber: this.serialNumber++,
      namee: this.namee,
      age: this.age,
      deparment: this.deparment,
    };

    this.submittedData.push(newEntery);

    this.namee = '';
    this.age = 0;
    this.deparment = '';



    alert('Form Submitted');
  }


  editingIndex: number = -1;


  editTheRow(index: number) {
    alert('Are you sure to edit this row ?');

    const editData = this.submittedData[index];

    // Fill input fields with old data
    this.namee = editData.namee;
    this.age = editData.age;
    this.deparment = editData.deparment;

    // Save the index so we can update later
    this.editingIndex = index;  


  }

    deleteTheRow(index: number) {
    alert('Are you sure to delete this row ?');
    
    this.submittedData.splice(index, 1);

  }
}
