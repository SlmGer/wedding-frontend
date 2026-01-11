import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  password = '';
  error = false;

  constructor(private auth: AuthService, private router: Router){}

  ngOnInit() {
    const role = this.auth.getRole();

    if (role === 'ADMIN') {
      this.router.navigate(['/admin/dashboard']);
    }

    if (role === 'GUEST') {
      this.router.navigate(['/']);
    }
  }

  submit(){
    this.auth.login(this.password).subscribe(res => {
      if(!res.success){
        this.error = true;
        return;
      }

      if(res.role === 'ADMIN'){
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
