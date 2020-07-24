import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public name = '';
 // cartcount : BehaviorSubject<number>;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private storage: Storage,
    private statusBar: StatusBar
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
    var result = JSON.parse(localStorage.getItem('user'));
    this.name = result.email;
    });
   
  }
}



