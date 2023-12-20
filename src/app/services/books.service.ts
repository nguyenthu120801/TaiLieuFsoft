import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, throwError } from 'rxjs';
import { BookList } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public search = new BehaviorSubject<string>("");
  bookList: any;
  constructor(private http: HttpClient) { }

  // get getListBook(): Observable<any> {
  //   return this.http.get<any>('http://localhost:3000/Books').pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  // get getListCategory(): Observable<any> {
  //   return this.http.get<any>('http://localhost:3000/category');
  // }
  // public listBooksByCat(CatId: string): Observable<any>{
  //   return this.http.get<any>('http://localhost:3000/Books?CatId='+CatId);
  // }
  // public getListBookById(bookId: string): Observable<any>{
  //   return this.http.get<any>('http://localhost:3000/Books?BookId='+bookId);
  // }

  get getAccount(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/accounts');
  }

  get getBookList():Observable<BookList[]>{
    return this.http.get<BookList[]>('../../assets/mock/data.json');
  }

  get getListCategory(): Observable<BookList[]>{
    return this.http.get<BookList[]>('../../assets/mock/data.json')
  }
  
}
