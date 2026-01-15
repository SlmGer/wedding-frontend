import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private roleKey = 'wedding-role';

  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);
  //private API = 'http://localhost:8080/api/auth/login';
  private API = environment.apiUrl+'/api/auth/login';

  login(password: string) {
    return this.http.post<any>(this.API, { password }).pipe(
      tap(res => {
        if(res.success /*&& isPlatformBrowser(this.platformId)*/) {
          localStorage.setItem(this.roleKey, res.role);
        }
      })
    );
  }

  logout(){
    localStorage.removeItem(this.roleKey);
  }

  getRole(): string | null {
    //if(isPlatformBrowser(this.platformId)){
      return localStorage.getItem(this.roleKey);
    //}
    //return null;
  }

  isAdmin(): boolean {
    return this.getRole() === 'ADMIN';
  }

  isGuest(): boolean {
    return this.getRole() === 'GUEST';
  }

  isFamily(): boolean {
    return this.getRole() === 'FAMILY';
  }

  isLoggedIn(): boolean {
    return !!this.getRole();
  }

  saveRole(role: string) {
    localStorage.setItem(this.roleKey, role);
  }

}
