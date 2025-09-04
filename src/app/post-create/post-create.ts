import { routes } from './../app.routes';
import { Component } from '@angular/core';
import { Post } from '../models/Post.interface';
import { PostsService } from '../common/post-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-create',
  imports: [ FormsModule, CommonModule ],
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
  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    private toastr: ToastrService,
    private router: Router
  ) {}




  ngOnInit(): void {
    // on initialise la route pour aller vers l'edit
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    if (postId) {
      this.isEditMode = true;
      this.loadPost(+postId);
    }
  }

  // On récupère l'id du post avec getPost et on gère les erreur si on ne récupère pas le post
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
    if (this.isEditMode) {
      this.updatePost();
    } else {
      this.createPost();
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

  updatePost(): void {
  if (!this.post.id) {
    this.toastr.error("Impossible de mettre à jour : ID manquant.");
    this.isSubmitting = false;
    return;
  }

  this.postService.updatePost(this.post.id, this.post).subscribe({
    next: () => {
      this.toastr.success('Post mis à jour avec succès !');
      this.router.navigate(['/posts']);
      this.isSubmitting = false;
    },
    error: () => {
      this.toastr.error("Erreur lors de la mise à jour du post.");
      this.isSubmitting = false;
      }
    });
  }
  
  onReturn(): void {
  this.router.navigate(['/posts']);
  }
}
