import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    !!localStorage.getItem('authToken')
  );
  public isAuth$: Observable<boolean> = this.isAuth.asObservable();

  public isAuthUser(): boolean {
    return !!localStorage.getItem('authToken');
  }

  public login(): void {
    localStorage.setItem('authToken', '12345678');
    this.isAuth.next(true);
  }

  public logout(): void {
    localStorage.removeItem('authToken');
    this.isAuth.next(false);
  }
}