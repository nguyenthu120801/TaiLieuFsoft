import { Component, OnInit } from '@angular/core';
import { User } from '../model';
import { AccountService } from '../services';
import { BooksService } from '../services/books.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User | null;
  books: any;
  public totalItem: number = 0;
  constructor(private accountService: AccountService, private book: BooksService, private cartService: CartService) { 
    this.user = this.accountService.userValue;
  }

  ngOnInit(): void {
    this.book.getBookList.subscribe(res => {
      res.forEach(data => {
        const arr = data.Books.filter(a => a.CatId === 10);
        this.books = arr;
      })
    })
    this.cartService.getBooks().subscribe(res => {
      this.totalItem = res.length;
    })
  }
  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
  slideConfig2 = { slidesToShow: 4, slidesToScroll: 1, autoplay: true, autoplaySpeed: 1000 };
  slides = [
    { img: "../../assets/image/book-1.png" },
    { img: "../../assets/image/book-2.png" },
    { img: "../../assets/image/book-3.png" },
    { img: "../../assets/image/book-4.png" },
    { img: "../../assets/image/book-5.png" },
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 1, autoplay: true, autoplaySpeed: 1000, arrows: false };
  Bookmarks = [
    { img: "../../assets/image/Bookmark.png" },
    { img: "../../assets/image/Bookmark-1.png" },
    { img: "../../assets/image/Bookmark-2.png" },
  ]
  slideConfig1 = { slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 1000, arrows: false, dots: true };
}
