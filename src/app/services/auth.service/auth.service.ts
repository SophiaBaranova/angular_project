import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'access_token';
  private authState$ = new BehaviorSubject<boolean>(this.hasValidToken());

  isAuthenticated$ = this.authState$.asObservable();

  login(username: string, password: string): boolean {
    // Simulate successful login
    const token = this.generateFakeJwt(username);
    localStorage.setItem(this.TOKEN_KEY, token);
    this.authState$.next(true);
    return true;
  }

  register(username: string, password: string): boolean {
    return this.login(username, password);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.authState$.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return this.hasValidToken();
  }
  
  private generateFakeJwt(username: string): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(
      JSON.stringify({
        sub: username,
        exp: Date.now() + 60 * 60 * 1000 // 1 hour
      })
    );
    const signature = 'fake-signature';

    return `${header}.${payload}.${signature}`;
  }
  private hasValidToken(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > Date.now();
    } catch {
      return false;
    }
  }
}
