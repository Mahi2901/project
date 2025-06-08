import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component"; // ✅ Import SecondComponent
import {FormsModule} from '@angular/forms'; // ✅ Import FormsModule
import { NavbarComponent} from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "./product-list/product-list.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';


// import { faYoutube} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  imports: [FirstComponent, FormsModule, NavbarComponent, CommonModule, ProductListComponent, ReactiveFormComponent, SecondComponent, HttpClientModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  title : string = 'Project';
  name : string = 'Iphone 14';

  // faYoutube = faYoutube ;
  onNameChange(event : any) {
    this.name= event.target.value;
  }

 


}
