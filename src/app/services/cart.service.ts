import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Product {
  id: number;
  imgUrl:string;
  name: string;
  price: number;
  desc1: string,
  desc2: string,
  desc3: string,
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  data: Product[] =
  [
    {
      id: 0,
     imgUrl : "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      name: 'CHECK PRINT SHIRT',
      price : 110,
      desc1: "Available Offers",
      desc2: "Bank Offer 10% Instant Discount on ICICI Bank Credit and Debit CardsT&C",
      desc3: "Bank Offer Rs30 Instant Discount on UPI T&C",
      amount: 0 
    },
    {
      id: 1,
      imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      name: "GLORIA HIGH LOGO SNEAKER",
      price: 91,
      desc1: "Available Offers",
      desc2: "Bank Offer 10% Instant Discount on ICICI Bank Credit and Debit CardsT&C",
      desc3: "Bank Offer Rs30 Instant Discount on UPI T&C",
      amount: 0
    },
    {
      id: 2,
      imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      name: "CATE RIGID BAG",
      price: 94.5,
      desc1: "Available Offers",
      desc2: "Bank Offer 10% Instant Discount on ICICI Bank Credit and Debit CardsT&C",
      desc3: "Bank Offer Rs30 Instant Discount on UPI T&C",
      amount: 0
    },
    {
      id: 3,
      imgUrl: "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      name: "GUESS CONNECT WATCH",
      price: 438.9,
      desc1: "Available Offers",
      desc2: "Bank Offer 10% Instant Discount on ICICI Bank Credit and Debit CardsT&C",
      desc3: "Bank Offer Rs30 Instant Discount on UPI T&C",
      amount: 0
    },
    {
      id: 4,
      imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      name: "70s RETRO GLAM KEFIAH",
      price: 20,
      desc1: "Available Offers",
      desc2: "Bank Offer 10% Instant Discount on ICICI Bank Credit and Debit CardsT&C",
      desc3: "Bank Offer Rs30 Instant Discount on UPI T&C",
      amount: 0
    },
    {
      id: 5,
      imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      name: "70s RETRO GLAM KEFIAH",
      price: 20,
      desc1: "Available Offers",
      desc2: "Bank Offer 10% Instant Discount on ICICI Bank Credit and Debit CardsT&C",
      desc3: "Bank Offer Rs30 Instant Discount on UPI T&C",
      amount: 0
    },
    {
      id: 6,
      imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      name: "70s RETRO GLAM KEFIAH",
      price: 20,
      desc1: "Available Offers",
      desc2: "Bank Offer 10% Instant Discount on ICICI Bank Credit and Debit CardsT&C",
      desc3: "Bank Offer Rs30 Instant Discount on UPI T&C",
      amount: 0
    }
  ]
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
 
  constructor() {}
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }
  
 
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
