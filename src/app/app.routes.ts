import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component"; // ✅ Import SecondComponent
import { NavbarComponent} from './navbar/navbar.component';
import { ProductListComponent } from "./product-list/product-list.component";

export const routes: Routes = [
  { path: '', redirectTo: 'first', pathMatch: 'full' }, // 👈 Default route
  { path: 'first', component: FirstComponent },
  { path: 'Product', component: ReactiveFormComponent },
  { path: 'second', component: SecondComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: '**', redirectTo: 'first' } // 👈 Optional: catch-all fallback
];


