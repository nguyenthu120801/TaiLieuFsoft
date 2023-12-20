import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  public books: any = [];
  public grandTotal: number = 0;
  quantity: any;
  bookList: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getBooks().subscribe(res => {
      this.books = res;
      // res.forEach((x, index, arr) => {
      //   let count = arr[index].quantity * (arr[index].Price - (arr[index].Price * arr[index].Discount))
      //   this.grandTotal += count;
      // })
    })
    this.totalSum();
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
    this.totalSum();
  }
  totalSum(){
    this.bookList = this.cartService.getBookList();
    this.bookList.subscribe(res=>{
    var a =  res.reduce((pre,curr)=>{
        return pre +(curr.quantity *(curr.Price- (curr.Price * curr.Discount)));
      },0);
      this.grandTotal = a;
    });
  }
}

