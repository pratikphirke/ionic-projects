import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    speed: 400
    };
  constructor(private router: Router,public menu: MenuController) {
//this.menu.enable(false, 'main-menu');
    this.menu.enable(false, 'main-menu');
   }

  ngOnInit() {
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
    }
}
