import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  message: string = '';
  username: string;
  password: string;
  constructor(private userService: UserService, private router: Router, private authService: AuthService,
     private cookieService: CookieService) {}
  login = function() {
    console.log(this.username);
    this.userService.login(this.username, this.password).subscribe( res => {
      if (res.errorCode === 0) {
        this.message = '';
        // save user info, then redirect to dashboard
        this.cookieService.set('userInfo', JSON.stringify(res.data));
        this.cookieService.set('token', res.data.token);
        console.log(res.data)
        this.authService.setLoggedIn(true);
        if(res.data.usertype == 2)
        {
          this.cookieService.set('teacherId', res.data.id.toString());
          this.router.navigate(['/myclasses']);
        }
        else
        {
        this.router.navigate(['/dashboard']);
        }
      } else {
        this.message = res.message;
      }
    });
  }
}
