import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-login-butotn',
  imports: [NgIf],
  templateUrl: './login-butotn.html',
  styleUrl: './login-butotn.scss'
})
export class LoginButotn {
 auth = inject(AuthService);
  login() { this.auth.login('/playground'); }
  logout() { this.auth.logout(); }
}
