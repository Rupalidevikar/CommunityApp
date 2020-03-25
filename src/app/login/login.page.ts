import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
         // tslint:disable-next-line: ban-types
         password: String = 'password';
         passwordShow = false;
         // tslint:disable-next-line: ban-types
         passwordIcon: String;

  constructor(
    private platform: Platform,
    private router: Router,
    private toastController: ToastController,
    formbuilder: FormBuilder,

  ) {

      const storedEmail = localStorage.getItem('email');

      this.loginForm = formbuilder.group
      ({
        email: new FormControl('', Validators.compose
       ([
       Validators.required,

       Validators.pattern('^.+@.+\\..+$')
       ])),

        password: ['', [Validators.required, Validators.minLength(8)]]
   });
  }
  hideshowpassword() {

    this.password = this.password === 'password' ? 'text' : 'password';

    this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';

  }


  login() {



  }

ngOnInit() {
  }

}
