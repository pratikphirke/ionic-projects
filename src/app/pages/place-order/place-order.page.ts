import { Component, OnInit } from '@angular/core';
import { CartService, Product } from 'src/app/services/cart.service';

import { AlertController, ModalController, MenuController, IonRadioGroup, IonRadio } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})
export class PlaceOrderPage implements OnInit {

  cart: Product[] = [];
  public Tadress = '';
  public Tfname = '';
  constructor(private cartService: CartService,
    private router: Router, private alertCtrl: AlertController,
   public menu: MenuController) {

      this.menu.enable(true, 'main-menu');
  var result = JSON.parse(localStorage.getItem('user'));
  this.Tadress = result.addr;
  this.Tfname = result.fname;
     }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
  async checkout() {
    // Perfom PayPal or Stripe checkout process

    let alert = await this.alertCtrl.create({
      header: 'Thanks for your Order!',
      message: 'We will deliver your Order as soon as possible',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.router.navigate(['/welcome']);
      //this.modalCtrl.dismiss();
    });
  }
}
