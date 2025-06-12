import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component'
import { CommonModule } from '@angular/common';
import { NgFor, NgIf, NgClass, NgStyle } from '@angular/common';
import { CustomPipePipe } from "../custom-pipe.pipe";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, CustomPipePipe, SearchComponent,MatCardModule,MatButtonModule,MatIconModule ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  public currentDate: any = new Date();
  public today : any = new Date();
  public price : number = 100;

  public passdata : any ="hi I Am From Parent ";



  // public deatils = {
  //   name:"maheshwaran",
  //   age : 22,
  //   country : "india" 
  // }

  public name: string= "mahesh waran";
  // products = {
  //   name: 'Iphone 14',
  //   price: 100,
  //   color: 'Black',
  //   discount: 10, // 10% discount
  //   inStock: 10,
  //   productURL: 'assetsimageiphone.png',
  //   addItem: 10,
  // };




public  products = [
  {
    id: 1,
    name: "Nike React Infinity Run Flyknit",
    description: "High-performance running shoes built for long-distance comfort with React foam and Flyknit technology.",
    brand: "NIKE",
    gender: "MEN",
    category: "RUNNING",
    size: [6, 7, 8, 9, 10],
    color: ["White", "Blue", "Black"],
    price: 160,
    is_in_inventory: true,
    itemsleft: 3,
    imageURL: ''
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    description: "Designed for responsive running with Boost cushioning and a sleek Primeknit upper.",
    brand: "ADIDAS",
    gender: "WOMEN",
    category: "RUNNING",
    size: [5, 6, 7, 8],
    color: ["Pink", "Black", "White"],
    price: 180,
    is_in_inventory: true,
    itemsleft: 7,
    slug: "adidas-ultraboost-22"
  },
  {
    id: 3,
    name: "Puma RS-X Efekt",
    description: "Retro-inspired design with bold colors and cushioning comfort for all-day wear.",
    brand: "PUMA",
    gender: "MEN",
    category: "CASUAL",
    size: [7, 8, 9, 10, 11],
    color: ["Red", "White", "Black"],
    price: 110,
    is_in_inventory: true,
    itemsleft: 5,
    slug: "puma-rsx-efekt"
  },
  {
    id: 4,
    name: "Reebok Nano X3",
    description: "Perfect training shoes for gym and crossfit enthusiasts with Floatride energy foam.",
    brand: "REEBOK",
    gender: "MEN",
    category: "TRAINING",
    size: [6, 7, 8, 9],
    color: ["Grey", "Black"],
    price: 130,
    is_in_inventory: true,
    itemsleft: 2,
    slug: "reebok-nano-x3"
  },
  {
    id: 5,
    name: "New Balance Fresh Foam 1080v12",
    description: "Engineered mesh upper and Fresh Foam cushioning for ultimate daily running support.",
    brand: "NEW BALANCE",
    gender: "WOMEN",
    category: "RUNNING",
    size: [5, 6, 7, 8],
    color: ["Blue", "Grey"],
    price: 160,
    is_in_inventory: true,
    itemsleft: 8,
    slug: "new-balance-fresh-foam-1080v12"
  },
  {
    id: 6,
    name: "ASICS Gel-Kayano 30",
    description: "Long-distance stability running shoes with Gel cushioning and engineered mesh.",
    brand: "ASICS",
    gender: "MEN",
    category: "RUNNING",
    size: [6, 7, 8, 9, 10],
    color: ["Black", "Orange"],
    price: 170,
    is_in_inventory: true,
    itemsleft: 4,
    slug: "asics-gel-kayano-30"
  },
  {
    id: 7,
    name: "Converse Chuck Taylor All Star",
    description: "Classic high-top sneakers for casual and timeless style.",
    brand: "CONVERSE",
    gender: "UNISEX",
    category: "CASUAL",
    size: [5, 6, 7, 8, 9, 10, 11],
    color: ["White", "Black"],
    price: 60,
    is_in_inventory: true,
    itemsleft: 12,
    slug: "converse-chuck-taylor-all-star"
  },
  {
    id: 8,
    name: "Nike Air Zoom Pegasus 39",
    description: "All-around training shoes with Zoom Air units for responsive cushioning.",
    brand: "NIKE",
    gender: "WOMEN",
    category: "RUNNING",
    size: [5, 6, 7, 8],
    color: ["Purple", "White"],
    price: 130,
    is_in_inventory: true,
    itemsleft: 6,
  },
  {
    id: 9,
    name: "Under Armour Charged Assert 9",
    description: "Affordable running shoes with Charged Cushioning for comfort and speed.",
    brand: "UNDER ARMOUR",
    gender: "MEN",
    category: "RUNNING",
    size: [7, 8, 9, 10],
    color: ["Black", "Grey"],
    price: 75,
    is_in_inventory: true,
    itemsleft: 9,
    slug: "under-armour-charged-assert-9"
  },
  {
    id: 10,
    name: "Vans Old Skool",
    description: "Iconic skate shoes with durable canvas and suede upper, great for everyday style.",
    brand: "VANS",
    gender: "UNISEX",
    category: "CASUAL",
    size: [6, 7, 8, 9, 10],
    color: ["Black", "White"],
    price: 65,
    is_in_inventory: true,
    itemsleft: 10,
    slug: "vans-old-skool"
  },
  {
    id: 11,
    name: "Skechers Go Walk 6",
    description: "Slip-on walking shoes with ultra-lightweight cushioning and breathable mesh.",
    brand: "SKECHERS",
    gender: "WOMEN",
    category: "WALKING",
    size: [5, 6, 7, 8],
    color: ["Grey", "Navy"],
    price: 85,
    is_in_inventory: true,
    itemsleft: 11,
    slug: "skechers-go-walk-6"
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    description: "Designed for responsive running with Boost cushioning and a sleek Primeknit upper.",
    brand: "ADIDAS",
    gender: "WOMEN",
    category: "RUNNING",
    size: [5, 6, 7, 8],
    color: ["Pink", "Black", "White"],
    price: 180,
    is_in_inventory: true,
    itemsleft: 7,
    slug: "adidas-ultraboost-22"
  }
];

  // discountPrice() {
  //   return this.products.price * (1 - this.products.discount / 100);
  // }

  // buyingAlert() {
  //   alert('Buying Confirmation ! ');
  // }

  // subitem() {
  //   if (this.products.addItem > 0) {
  //     this.products.addItem = this.products.addItem - 1;
  //   }
  // }

  // addItem() {
    
  //   if (this.products.addItem < this.products.inStock) {
  //   this.products.addItem = this.products.addItem + 1;
  // }
  // }




}

