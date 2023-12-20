import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { BookList } from '../model/book.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Observable<BookList[]>;
  bookList: any;
  listCate: any;
  searchKey: string = "";
  p: number = 1;
  itemsPerPage: number = 8;
  totalBooks: any;
  constructor(private book: BooksService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService) { }

  CatId: any;
  count: number = 0;
  ngOnInit(): void {
    this.book.getBookList.subscribe(param => {
      param.forEach(data => {
        this.bookList = data.Books
      })
    })

    this.book.getListCategory.subscribe(res => {
      res.forEach(data=>{
        this.listCate = data.category;
      })
    })
    
    this.book.search.subscribe((val: any) => {
      this.searchKey = val;
    })

    this.activatedRoute.paramMap.subscribe(res => {
      this.CatId = res.get('CatId');
    });
    this.getAllBooks();
  }

  getAllBooks(){
    this.book.getBookList.subscribe(param => {
      param.forEach(data => {
        this.bookList = data.Books
      })
    })
  }
  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
  
  FilterCate(id: number){
    this.book.getBookList.subscribe(res=>{
      res.forEach(data=>{
        const arr = data.Books.filter(a=> a.CatId === id);
        arr.forEach(pram=>{
          this.bookList = arr;
        })
      })
    })
  }
}
