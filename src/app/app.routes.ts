import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FirstComponent } from './first/first.component';

export const routes: Routes = [
    { path: '', component: ReactiveFormComponent},
    { path: 'first', component: FirstComponent}
];
