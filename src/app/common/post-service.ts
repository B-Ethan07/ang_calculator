import { Injectable } from '@angular/core';
import { Post } from '../models/Post.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts'

    constructor( private http: HttpClient){
    }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }

  getPost(): Observable<Post>{
    return this.http.get<Post[]>(`${this.baseUrl}/posts/${id}`)
  }

  createPost(posts:Post): Observable<Post> {
   return this.http.post<Post>(`${this.baseUrl}/posts`, posts);
  }
  updatePost(id: number, posts:Post): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/posts/${id}`, posts);
  }
  deletePost(id: number): Observable<void> {
   return this.http.delete<void>(`${this.baseUrl}/posts/${id}`);
}
}
