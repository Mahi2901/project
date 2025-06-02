import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  

  @Input() gettingTheData! : string;

  searchText : string = "Means Wear";

  searchupdate(event : any){
    this.searchText = event.target.value;
  }

}
