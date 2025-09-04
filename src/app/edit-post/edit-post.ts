import { Component } from '@angular/core';
import { Post } from '../models/Post.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../common/post-service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './edit-post.html',
  styleUrl: './edit-post.css'
})
export class EditPost {
  post: Post = {
    id: 0,
    title: '',
    body: '',
    userId: 1
  };
  isSubmitting = false;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    if (postId) {
      this.loadPost(postId);
    }
  }

  loadPost(id: number): void {
    this.postService.getPost(id).subscribe({
      next: (data) => {
        this.post = data;
      },
      error: () => {
        this.toastr.error("Impossible de charger le post.");
        this.router.navigate(['/posts']);
      }
    });
  }

  onSubmit(): void {
    if (!this.post.title || !this.post.body) {
      this.toastr.error('Tous les champs sont obligatoires.');
      return;
    }

    this.isSubmitting = true;

    this.postService.updatePost(this.post.id ?? 0, this.post).subscribe({
      next: () => {
        this.toastr.success('Post modifié avec succès !');
        this.router.navigate(['/posts']);
      },
      error: (err) => {
        this.toastr.error("Erreur lors de la modification.");
        this.isSubmitting = false;
      }
    });
  }
  onReturn(): void {
  this.router.navigate(['/posts']);
  }
}
