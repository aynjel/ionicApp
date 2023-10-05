import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPageForm } from './login.page.form';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';  

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }
  
  ngOnInit() {
    this.loginForm = new LoginPageForm(this.formBuilder).createForm();
  }

  login() {
    this.authService.login(this.loginForm.value)
      .subscribe({
          next: (res) => {
            localStorage.setItem('access_token', res.token);
            this.loginForm.reset();
            this.toastr.success('Login successful');
            this.router.navigateByUrl('/dashboard');
          },
          error: (err) => {
            console.log(err);
            this.toastr.error(err.error.message);
          }
        }
      );
  }

}
