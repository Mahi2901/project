import { Component} from '@angular/core';
import {FormsModule} from '@angular/forms'; // ✅ Import FormsModule
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';



// import { faYoutube} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
  MatTabsModule],
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
