import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
  
  ],
  imports: [
    FirstComponent,
    SecondComponent,
    ProductListComponent

  ]

})
export class ModuleModule { }
