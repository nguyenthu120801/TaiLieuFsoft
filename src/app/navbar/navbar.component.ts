import { Component, OnInit } from '@angular/core';
import { User } from '../model';
import { AccountService } from '../services';
import { BooksService } from '../services/books.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: User | null;
  public searchTerm !: string;
  public totalItem: number = 0;
  constructor(private accountService: AccountService, private book: BooksService, private cartService: CartService) {
    this.user = this.accountService.userValue;
  }

  ngOnInit(): void {
    this.cartService.getBooks().subscribe(res => {
       this.totalItem = res.length;
    });
    // this.countCart();
  }

  // countCart(){
  //   this.totalItem = this.cartService.getCountCart();
  // }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.book.search.next(this.searchTerm);
  }
  logout() {
    this.accountService.logout();
  }
}
