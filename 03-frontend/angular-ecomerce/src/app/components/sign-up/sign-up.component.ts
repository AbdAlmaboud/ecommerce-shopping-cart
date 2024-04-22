import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  userData = {
    username: '',
    password: '',
    email: '',
    cardNumber: ''
  };

  constructor(private authService: AuthService){}

  onSubmit() {
    console.log(this.userData);
    this.authService.signUp(this.userData.email, this.userData.password, this.userData.email, this.userData.cardNumber);
  }
}
