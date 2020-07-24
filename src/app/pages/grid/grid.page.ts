import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import{ HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {
  routinelist: any;
  public items:any;
  public name = '';
  //public items: any ='';
  singleItem: any ='';
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  public data:any;  
  
  constructor(public storage: Storage, public router: Router, 
    public menu: MenuController, private http: HttpClient,
     public cartService: CartService) {
      this.getData();
    }
    
    gotoDetail(singleItem) {
      //console.log(singleItem);
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(singleItem)
        }
      };
      this.router.navigate(['./display-prod'], navigationExtras);
    }
    getData(){
     
      this.items=this.cartService.getProducts();
    }
  
    ngOnInit() {
      var result = JSON.parse(localStorage.getItem('user'));
      this.name = result.fname;
      this.cartItemCount = this.cartService.getCartItemCount();
    }
  
  }
  

