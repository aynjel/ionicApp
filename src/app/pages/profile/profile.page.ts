import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileEditForm } from './profile.page.form';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User | undefined;

  profileEditForm!: FormGroup;

	constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService,
  ) {
    this.authService.profile()
    .subscribe({
      next: (user) => {
        console.log(user);
        this.user = user;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  ngOnInit() {
    this.profileEditForm = new ProfileEditForm(this.formBuilder).getForm();
  }

  openEditProfileForm(content: any) {
  }
    

  onLogout(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log me out!',
      cancelButtonText: 'No, keep me logged in',
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout()
          .subscribe({
            next: (res) => {
              localStorage.removeItem('access_token');
              this.router.navigate(['/login']);
            },
            error: (err) => {
              console.log(err);
            }
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'You are still logged in',
          icon: 'error',
          heightAuto: false
        })
      }
    })
  }

  onUpdateProfile(){
    console.log(this.profileEditForm.value);
  }

}
