import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecapComponent } from './recap/recap.component';
import { FormService } from './services/form.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { PhonePipe } from './pipes/phone.pipe';
import { BookListComponent } from './bookList/bookList.component';
import { VariablesGlobales } from './variablesGlobales';
import { BookFilterPipe } from './pipes/gender-filter.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { BookState } from 'shared/states/book-state';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BookComponent } from './book/book.component';
import { AdressState } from 'shared/states/adress-state';

const appRoutes: Routes = [
  { path: 'recap', component: RecapComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'products', component: BookListComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: '', component: FormulaireComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    HeaderComponent,
    FooterComponent,
    RecapComponent,
    PhonePipe,
    BookListComponent,
    BookFilterPipe,
    SearchPipe,
    OrderByPipe,
    ShoppingCartComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot([AdressState]),
    NgxsModule.forRoot([BookState]),
  ],
  providers: [
    FormService,
    VariablesGlobales
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    PhonePipe
  ]
})
export class AppModule { }
