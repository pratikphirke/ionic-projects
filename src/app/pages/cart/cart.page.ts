import { Component, OnInit } from '@angular/core';

import { CartService, Product } from 'src/app/services/cart.service';
import { ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  
  cart: Product[] = [];
  
  constructor(private cartService: CartService, private modalCtrl: ModalController, 
    private router: Router, private alertCtrl: AlertController) { }
  
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
 
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
 
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
 
  close(product) {
    //this.modalCtrl.dismiss();
    this.cartService.removeProduct(product);
  }
 
  async Payment() {
    // Perfom PayPal or Stripe checkout process
    this.router.navigate(['/place-order']);
  
  }
}
