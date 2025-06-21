import { Component , OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule,
            CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
[x: string]: any;

  constructor(){}

  ngOnInit(){
  this.initForm();
  this.iniatForm();
  }
  public myForm1! : FormGroup;
  public serialNumber : number = 0;
  public userData : any [] = [];
  public showTheTable : boolean = false ;

  initForm(){
    this.myForm1 = new FormGroup({
      firstName : new FormControl(null,Validators.required),
      secondName : new FormControl(null,Validators.required),
      email : new FormControl(null,Validators.required)
  })
  }

  createUser(){
    const formValues =this.myForm1.value;
    
    const newUser = {
      serialNumber : this.serialNumber++,
      firstName :formValues.firstName,
      secondName : formValues.secondName,
      email : formValues.email
    }
    this.userData.push(newUser);

    this.myForm1.reset()

  }
showUSerDataInTable(){
 this.showTheTable = ! this.showTheTable
}

public countries = ['India', 'France', 'USA', 'Germany', 'Japan'];
public myForm2!:FormGroup;
public selectedArray : any [] = [] ;


iniatForm(){
  this.myForm2 = new FormGroup({
    country1 : new FormControl(false)

  })
}



click(){
  console.log("countreis : " ,JSON.stringify(this.selectedArray))

}
onCheckboxChange(event : any) : void{
  const value = event.target.value;
  const checked = event.target.checked;
  
  console.log(event)

 if(checked){
    this.selectedArray.push(value)
 }
 
 else if(!checked) {
      const index = this.selectedArray.indexOf(value);
      if(index >= 0){
      this.selectedArray.splice(index,1)
      }
 
  }

  }


}
