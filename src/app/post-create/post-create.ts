import { Component } from '@angular/core';
import { Post } from '../models/Post.interface';
import { PostService } from '../common/post-service';

@Component({
  selector: 'app-post-create',
  imports: [],
  templateUrl: './post-create.html',
  styleUrl: './post-create.css'
})
export class PostCreate {
  post: Post = {
    title: '',
    body: '',
    userId: 0,
  }

  constructor(private postService:PostService){}

  createPost():void {
    this.postService.createPost(this.post).subscribe({
      next:(post => )
    })
  }


}
