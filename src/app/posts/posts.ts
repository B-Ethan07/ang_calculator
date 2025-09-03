import { PostService } from './../common/post-service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post.interface';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from "../../../node_modules/@angular/router/router_module.d";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.html',
  imports: [RouterLink],
  styleUrls: ['./posts.css']  // fixed plural here
})
export class Posts implements OnInit {
  posts!: Post[];
  errorMessage = '';

  constructor(private postService: PostService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.postService.getPost().subscribe({
      next: (data) => (this.posts = data),
      error: (err) => {
         this.toastr.error('Erreur serveur');
      },
    });
  
    this.postService.createPost({ id: 1, title: "Ethan", body: "Hello World", userId: 1 })
      .subscribe({
        next: newPost => console.log('Créé :', newPost),
        error: err => console.error('Erreur de création', err)
      });
    }
}
