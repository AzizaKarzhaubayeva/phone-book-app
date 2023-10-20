import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = ''; 
  formGroup: FormGroup;

  constructor(private authService: AuthService, private navCtrl: NavController, public formBuilder: FormBuilder) { 
    this.formGroup = formBuilder.group({
      emailControl: [
        "",
        Validators.compose([
          Validators.minLength(4),
          Validators.pattern("[0-9a-z-A-Z@.]*"),
          Validators.required
        ])
      ],
      passwordControl: [
        "",
        Validators.compose([
          Validators.minLength(8),
          Validators.pattern("[0-9a-z-A-Z@.#*$!?&+-/]*"),
          Validators.required
        ])
      ]
    });
  }

  ngOnInit(): void {
    
  }


  login(formData: any){

    if(this.authService.login(this.email, this.password)){
      this.navCtrl.navigateRoot('/home');
    }
    else{
      console.log('Invalid credentials. Please try again.');
    }

  }

}
