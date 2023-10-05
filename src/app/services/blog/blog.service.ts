import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/interface/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  apiUrl = 'http://localhost:8085/api/blogs';

  blog: Blog | undefined;

  constructor(
    private http: HttpClient
  ) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl);
  }

  getBlog(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/${id}`);
  }

  createBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(`${this.apiUrl}/create`, blog);
  }

  updateBlog(blog: Blog): Observable<Blog> {
    return this.http.put<Blog>(`${this.apiUrl}/${blog.id}/update`, blog);
  }

  deleteBlog(id: number): Observable<Blog> {
    return this.http.delete<Blog>(`${this.apiUrl}/${id}/delete`);
  }
}
