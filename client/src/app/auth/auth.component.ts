import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/user.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  public username: string;
  public passworord: string;

  constructor(private authService: AuthService, private router: Router) { }

  signin() {
    const user: IUser = {
      Username: this.username,
      Password: this.passworord
    }

    this.authService.signIn(user).subscribe((res: { success: boolean}) => {
      if (res.success) {
        this.router.navigate(['transaction']);
      }
    });
  }
}
