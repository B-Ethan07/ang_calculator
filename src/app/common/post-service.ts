import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './../models/Post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}`);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}/posts`, post);
  }
  updatePost(id: number, post:Post): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/posts/${id}`, post);
  }
  deletePost(id: number): Observable<void> {
   return this.http.delete<void>(`${this.baseUrl}/posts/${id}`);
}
}
