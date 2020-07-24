import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  
//  user: User;

public Temail = '';
public Tfname = '';
public Tlname = '';
public Tmobile = '';
public Tadress = '';

  constructor(private storage: Storage,private router: Router,
    public alertController: AlertController,public menu: MenuController) 
    {
      this.menu.enable(true, 'main-menu');
  var result = JSON.parse(localStorage.getItem('user'));

  this.Temail = result.email;
  this.Tfname = result.fname;
  this.Tlname = result.lname;
  this.Tmobile = result.mno;
  this.Tadress = result.addr;
     }


    ngOnInit() {
     
  }
  async  LogOut()
  {
    this.router.navigate(['/login']);
  }
  ShopNow()
  {
    this.router.navigate(['/grid']);
  }

  }
