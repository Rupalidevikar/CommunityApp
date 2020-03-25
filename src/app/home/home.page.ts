import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public RegisterForm: FormGroup;
  passwordshow = false;
  // tslint:disable-next-line: ban-types
  passwordicon: String;
  router: any;
  // tslint:disable-next-line: ban-types
  password: String = 'password';

  constructor(
    public formBuilder: FormBuilder,
    public toastContriller: ToastController,
  ) {
      this.RegisterForm = formBuilder.group
    ({
      email: new FormControl('', Validators.compose
      ([Validators.required,
      Validators.pattern('^.+@.+\\..+$')
      ])),

      password: ['', [Validators.required, Validators.minLength(8)]],



    });

  }

  onregister() {

    this.router.navigate(['/login']);
  }

  hideshowpassword() {

    this.password = this.password === 'password' ? 'text' : 'password';

    this.passwordicon = this.passwordicon === 'eye' ? 'eye-off' : 'eye';

  }




  ngOnInit(): void {}

}

