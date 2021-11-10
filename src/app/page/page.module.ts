import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecapComponent } from '../recap/recap.component';
import { FormulaireComponent } from '../formulaire/formulaire.component';
import { BookComponent } from '../book/book.component';
import { BookListComponent } from '../bookList/bookList.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { RouterModule, Routes } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { AdressState } from 'shared/states/adress-state';
import { BookState } from 'shared/states/book-state';
import { PhonePipe } from '../pipes/phone.pipe';

const appChild: Routes = [
  { path: 'recap', component: RecapComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'products', component: BookListComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'book/:ref', component: BookComponent},
];

@NgModule({
  declarations: [
    RecapComponent,
    FormulaireComponent,
    ShoppingCartComponent,
    BookComponent,
    PhonePipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appChild),
    ReactiveFormsModule,
    
  ]
})
export class PageModule { }
