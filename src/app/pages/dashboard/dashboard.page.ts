import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { Blog } from 'src/app/interface/blog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogCreateForm } from './dashboard.blog.form';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interface/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  user!: User;

  blogForm!: FormGroup;

  blogs: Blog[] = [];

	constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private authService: AuthService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {
    
  }

  ngOnInit() {
    this.blogForm = new BlogCreateForm(this.formBuilder).getForm();
    this.authService.profile().subscribe({
      next: (user) => {
        console.log(user);
        this.user = user;
        this.getBlogs();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  openCreateBlogForm(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

  openEditBlogForm(content: any, id: number) {
    this.blogService.getBlog(id).subscribe({
      next: (blog) => {
        console.log(blog);
        this.blogForm.patchValue({
          id: blog.id,
          title: blog.title,
          content: blog.content
        });
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          console.log(result);
        }, (reason) => {
          this.blogForm.reset();
          console.log(reason);
        });
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe({
      next: (data) => {
        this.blogs = data.filter((blog) => blog.user_id === this.user.id).reverse();
        console.log(this.blogs);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onCreateBlog() {
    // add user_id to blogForm
    this.blogForm.value.user_id = this.user.id;
    // remove id from blogForm
    delete this.blogForm.value.id;
    console.log(this.blogForm.value);
    this.blogService.createBlog(this.blogForm.value).subscribe({
      next: (blog) => {
        console.log(blog);
        this.blogForm.reset();
        // this.modalService.dismissAll();
        this.getBlogs();
        this.toastr.success('Blog created successfully');
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onDeleteBlog(id: number) {
    this.blogService.deleteBlog(id).subscribe({
      next: (data) => {
        console.log(data);
        this.blogForm.reset();
        this.getBlogs();
        this.toastr.success('Blog deleted successfully');
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onUpdateBlog() {
    this.blogService.updateBlog(this.blogForm.value).subscribe({
      next: (blog) => {
        console.log(blog);
        this.blogForm.reset();
        this.modalService.dismissAll();
        this.getBlogs();
        this.toastr.success('Blog updated successfully');
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
