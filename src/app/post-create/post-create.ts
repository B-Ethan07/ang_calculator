import { Component } from '@angular/core';
import { Post } from '../models/Post.interface';
import { PostsService } from '../common/post-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-create',
  imports: [ FormsModule, CommonModule],
  templateUrl: './post-create.html',
  styleUrl: './post-create.css',
})
export class PostCreate {

 post: Post = {
    title: '',
    body: '',
    userId: 1 // Valeur par défaut
  };

  isSubmitting = false;

  constructor(
    private postService: PostsService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (!this.post.title || !this.post.body) {
      this.toastr.error('Tous les champs sont obligatoires.');
      return;
    }
  }

  createPost(): void {
     this.postService.createPost(this.post).subscribe({
      next: () => {
        this.toastr.success('Post créé avec succès !');
        this.router.navigate(['/posts']);
        this.isSubmitting = true;
      },
      error: (err) => {
        console.log
        this.toastr.error("Erreur lors de la création du post.");
        this.isSubmitting = false;
      }
    })
  }
}
