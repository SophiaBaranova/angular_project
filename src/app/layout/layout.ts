import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service/auth.service';
import { Observable } from 'rxjs';
import { Login } from "../login/login";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AsyncPipe, RouterLink, Login],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  appName = 'Web Development';
  isAuthenticated$!: Observable<boolean>;
  constructor(private authService: AuthService) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }
  logout() {
    this.authService.logout();
  }
}
