import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl, ValidatorFn} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  data={};
  data2: any;
  newData: any;
  myForm: FormGroup;
  submitted = false;

  error_messages = {
  
    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'weak password' },
      { type: 'maxlength', message: 'strong password' }
    ],
    'conf_pass': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'not match.' },
      //{ type: 'maxlength', message: 'not match' }
    ],
  }

  constructor(private storage: Storage, public router: Router, public formBuilder: FormBuilder,
    public alertController: AlertController) {
    this.myForm = new FormGroup({
      fname: new FormControl('',Validators.required),
      lname: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      mno: new FormControl('',Validators.required),
      addr: new FormControl('',Validators.required),
      password: new FormControl('', Validators.compose([Validators.minLength(6), Validators.required])),
      conf_pass: new FormControl('', Validators.compose([Validators.minLength(6), Validators.required, this.equalto('password')])),
   });
  }
 //  this.checkpass(this.myForm);

  get f() { return this.myForm.controls; }
  
  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
    
    let input = control.value;
    
    let isValid=control.root.value[field_name]==input
    if(!isValid)
    return { 'equalto': {isValid} }
    else
    return null;
    };
    }
 
  
  ngOnInit() {
    

  }

  async register() {
  
 this.submitted = true;
        // stop here if form is invalid
        if (this.myForm.invalid) {
            return;
        } else{
          console.log(this.myForm.value)
          let tmpdata = localStorage.getItem('data');
            this.data2 = {'data': this.myForm.value};
            if (tmpdata){
                this.newData = JSON.parse(tmpdata);
                this.newData.push(this.data2);
                localStorage.setItem('data',JSON.stringify(this.newData));
      
        }else{
      
          localStorage.setItem('data', JSON.stringify([this.data2]));
          
        
        }
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Sign Up Alrt',
          message: 'Registration sucessfull.',
          buttons: ['OK']
        });
    
        await alert.present();
        this.router.navigate(['/login']);
        }
  
}
  
  
}
