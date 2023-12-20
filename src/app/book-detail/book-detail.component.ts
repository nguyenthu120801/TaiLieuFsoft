import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BooksService } from '../services/books.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  id: any;
  bookItem: any;
  constructor(private book: BooksService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService) {
    }

  ngOnInit(): void {
    this.bookDetail();
  }
  bookDetail(){
    this.activatedRoute.paramMap.subscribe(param=>{
      this.id = param.get('id');
      console.log(typeof this.id)
     this.book.getBookList.subscribe(res=>{
        console.log(res);
        res.map(data=>{
         var a = data.Books.filter(check=>check.BookId === Number(this.id));
         this.bookItem = a;
        })
      })
    })
  }
  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}
