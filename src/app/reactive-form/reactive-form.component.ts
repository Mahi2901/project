import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit   {
formSubmitted() {
throw new Error('Method not implemented.');
}


  myForm!: FormGroup;
  namee!: any;
  age!: any;
  deparment! : any;

  ngOnInit(){
    this.myForm = new FormGroup({
      name : new FormControl(null),
    });
  }
  
}
