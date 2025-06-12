import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
  
  ],
  imports: [
    FirstComponent,
    SecondComponent,
    ProductListComponent,
    MatButtonModule
  ]

})
export class ModuleModule { }
