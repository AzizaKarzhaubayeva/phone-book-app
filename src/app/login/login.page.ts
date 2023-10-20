import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = ''; 

  constructor(private authService: AuthService, private navCtrl: NavController) { }

  ngOnInit(): void {
    
  }

  login(){
    if(this.authService.login(this.email, this.password)){
      this.navCtrl.navigateRoot('/home');
    }
    else{
      console.log('Invalid credentials. Please try again.');
    }
  }

}
