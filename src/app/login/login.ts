import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  isRegisterMode = false;

  authForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d).+$/)
    ])
  });

  constructor(private auth: AuthService, private router: Router) {}

  isInvalid(controlName: string): boolean {
    const control = this.authForm.get(controlName);
    return !!control && control.touched && control.invalid;
  }

  toggleMode(): void {
    this.isRegisterMode = !this.isRegisterMode;
    this.authForm.reset();
  }

  submit(): void {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }

    const { username, password } = this.authForm.value;

    if (this.isRegisterMode) {
      if (this.auth.register(username!, password!)) {
        this.router.navigate(['/']);
      }
    } else {
      if (this.auth.login(username!, password!)) {
        this.router.navigate(['/']);
      }
    }
  }
}
