
import { Component, input , OnInit} from '@angular/core';
import {AppComponent} from '../app.component'; // ✅ Import AppComponent
import {FormsModule} from '@angular/forms'; // ✅ Import FormsModule
import {SecondComponent} from '../second/second.component'; // ✅ Import SecondComponent
import { ClientDetailsService } from '../service/client-details.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router'; // ✅ Import Router
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-first',
  imports: [FormsModule,
            HttpClientModule,
            MatButtonModule],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit{

constructor  (private clientdetails : ClientDetailsService ){}

ngOnInit(): void {

}

  name: string = 'MaheshWaran';
  title : string = "Hello Mahesh !";

  changTitle() {
    this.title ="Title Changed By Button Click";
    alert ("hi changed the title")
  }
  imgUrl = "https://www.w3schools.com/w3images/lights.jpg";

  isDisabled: any = false; 
  
  readonly myName = input<string>(''); // ✅ Use @Input() decorator  Receiving value from parent

  sendingTheData(){
    this.clientdetails.getTheData().subscribe((data:any)=>{
      console.log(data)
    })
  }


  sendTheData(){
    const data = {
      Id : "2",
      Name : "Maheshwaran"
    }
    this.clientdetails.postTheData(data).subscribe((data1)=>{
      console.log(data1)
    })
  }
  

  updateTheData(){
    const data1 ={
      id : "4ec1",
      Id : "2",
      Name: "Maheshwaran"
    }
    this.clientdetails.updateTheData(data1).subscribe((newDetail)=>{
      console.log(newDetail)
    })
  }

}
