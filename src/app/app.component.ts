import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import {BehaviorSubject} from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public name = '';
  cartcount : BehaviorSubject<number>;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private  storage: Storage,
    private statusBar: StatusBar,
    private cartService: CartService
  ) {
    this.initializeApp();

    this.cartcount =this.cartService.getCartItemCount();
 var result = JSON.parse(localStorage.getItem('user'));

 this.name = result.email;
  //this.name = result.email;
   //  console.log(this.name);
   
   // console.log('all data is',result);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}



