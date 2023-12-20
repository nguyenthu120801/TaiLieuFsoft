import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers';
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,  canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'books', component: BooksComponent,
  },
  {
    path: 'book-detail/:id', component: BookDetailComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  { path: 'account', loadChildren: accountModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
