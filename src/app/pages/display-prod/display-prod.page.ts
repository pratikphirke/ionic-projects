import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, MenuController, ModalController } from '@ionic/angular';
import{ HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-display-prod',
  templateUrl: './display-prod.page.html',
  styleUrls: ['./display-prod.page.scss'],
})
export class DisplayProdPage implements OnInit {
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  public data:any;  
  
  constructor(public storage: Storage, public router: Router, 
    public menu: MenuController, private http: HttpClient,private route: ActivatedRoute,
    private cartService: CartService, private modalCtrl: ModalController)
{
  this.route.queryParams.subscribe(params => {
    if (params && params.special) {
      this.data = JSON.parse(params.special);
    // console.log(this.data)
    }
  });
}
addToCart(items) {
  //console.log(items);
 this.cartService.addProduct(items)
}

ngOnInit() {
  this.cartItemCount = this.cartService.getCartItemCount()
}

}
