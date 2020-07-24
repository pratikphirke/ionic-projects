import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password:string;


  constructor(private storage: Storage,private router: Router,
    public alertController: AlertController,public loadingController: LoadingController) { }

  ngOnInit() {
  
}
  async logForm() {

   /* const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 3000
    });
    
    await loading.present();

      console.log('control email is',this.email);
      console.log('control Password is',this.password);
    */
 }
    
  async checkLoginData()
  {
    var result = JSON.parse(localStorage.getItem('data'));
    //console.log(result[0].data.email);
    for(let obj of result) {

      if(obj.data.email == this.email && obj.data.password == this.password)
      {
        var emailid = obj.data.email;
        var pass = obj.data.password;
        var allData = obj.data;
      } 
    }

    if(emailid && pass) {
      localStorage.setItem('user', JSON.stringify(allData));
      console.log('data user',allData);
      this.router.navigate(['/welcome']);
  
    } else this.presentAlert()
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: '.alert-danger',
      header: 'Opps..',
      message: 'Invalid Email And Password',
      buttons: ['OK']
    });

    await alert.present();
  }



}
