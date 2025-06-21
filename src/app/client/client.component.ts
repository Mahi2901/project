import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientDetailsService } from '../service/client-details.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-client',
  imports: [ReactiveFormsModule ,
            HttpClientModule,
             CommonModule
          
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
})
export class ClientComponent implements OnInit {
  // public name1 = name.MAHESHGRADE;
  constructor(private client : ClientDetailsService) {}

  ngOnInit() {
    this.init();
  }

  public clientForm!: FormGroup;
  public clientData : any [] = [] ;

  init() {
    this.clientForm = new FormGroup({
      ClientName: new FormControl(),
      ProjectName: new FormControl(),
      StartDate: new FormControl(),
      EndDate: new FormControl(),
      Developer: new FormControl(),
      Status: new FormControl(),
      Priority: new FormControl("high")
    });
  }

  createNewClient(){
    const formValues = this.clientForm.value;
    const newClient = {
      ClientName:formValues.ClientName,
      ProjectName:formValues.ProjectName,
      StartDate:formValues.StartDate,
      EndDate:formValues.EndDate,
      Developer:formValues.Developer,
      Status:formValues.Status,
      Priority:formValues.Priority
    }

    this.client.postTheClientdata(newClient).subscribe((details : any)=>{
        console.log(details)
    })

    this.client.getTheClientData().subscribe((details)=>{
      this.clientData.push(details);
    })
  }



}
