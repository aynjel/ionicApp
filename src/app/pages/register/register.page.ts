import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterPageForm } from './register.page.form';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';  

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.registerForm = new RegisterPageForm(this.formBuilder).createForm();
  }

  register() {
    this.authService.register(this.registerForm.value)
      .subscribe({
        next: (res) => {
          this.toastr.success('Register success');
          this.registerForm.reset();
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

}
