import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = [];
  public books: Book[] = []
  public bookList = new BehaviorSubject<any>([]);
  cartLength: any;
  constructor() { }
  getBooks() {
    return this.bookList.asObservable();
  }
  setBooks(book: any) {
    this.cartItemList.push(...book);
    this.bookList.next(book);
  }
  addToCart(book: any) {
    var index;
    index = this.books.findIndex(p => {
      return p.BookId === book.BookId
    });
    if (index !== -1) {
      this.books[index].quantity += 1;
    } else {
      this.books.push(book);
      this.bookList.next(this.books);
    }
  }

  removeItem(book: any){
    this.bookList.subscribe(res=>{
      res.forEach((x, index, arr)=>{
        if(x.BookId === book.BookId){
          res.splice(index,1);
        }
      })
    }).unsubscribe();
  }
 
  getBookList(){
    return this.bookList;
  }

}
