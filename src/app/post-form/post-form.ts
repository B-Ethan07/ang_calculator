import { routes } from '../app.routes';
import { Component } from '@angular/core';
import { Post } from '../models/Post.interface';
import { PostsService } from '../common/post-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-create',
  imports: [FormsModule, CommonModule],
  templateUrl: './post-form.html',
  styleUrl: './post-form.css',
})
export class PostForm {
  post: Post = {
    title: '',
    body: '',
    userId: 1, // Valeur par défaut
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
    // On récupère l'ID du post depuis l'URL (paramètre de route) et on le convertis en number car c'est une chaine de caractère
    const postId = Number(this.route.snapshot.paramMap.get('id'));

    // Si un ID est présent, cela signifie qu'on est en mode édition
    if (postId) {
      this.isEditMode = true; // On passe en mode édition
      this.loadPost(postId); // On charge les données du post à modifier
    }
  }

  // Méthode pour charger un post existant à partir de son ID
  loadPost(id: number): void {
    this.postService.getPost(id).subscribe({
      // Si la requête réussit, on met à jour notre objet "post"
      next: (data) => {
        this.post = data;
      },
      // Si une erreur survient, on affiche un message et on redirige vers la liste des posts
      error: () => {
        this.toastr.error('Impossible de charger le post.');
        this.router.navigate(['/posts']);
      },
    });
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit(): void {
    // Vérifie si les champs obligatoires sont remplis
    if (!this.post.title || !this.post.body) {
      this.toastr.error('Tous les champs sont obligatoires.');
      return;
    }

    this.isSubmitting = true; // Active le mode "chargement"

    // Si on est en mode édition, on met à jour le post
    if (this.isEditMode) {
      this.updatePost();
    } else {
      // Sinon, on crée un nouveau post
      this.createPost();
    }
  }

  // Méthode pour créer un nouveau post
  createPost(): void {
    this.postService.createPost(this.post).subscribe({
      // En cas de succès, on affiche un message et on redirige
      next: () => {
        this.toastr.success('Post créé avec succès !');
        this.router.navigate(['/posts']);
        this.isSubmitting = false;
      },
      // En cas d'erreur, on affiche un message d'erreur
      error: (err) => {
        this.toastr.error('Erreur lors de la création du post.');
        this.isSubmitting = false;
      },
    });
  }

  // Méthode pour mettre à jour un post existant
  updatePost(): void {
    // On vérifie que le post a bien un ID (sinon, on ne peut pas le mettre à jour)
    if (!this.post.id) {
      this.toastr.error('Impossible de mettre à jour : ID manquant.');
      this.isSubmitting = false;
      return;
    }

    // Appel au service pour mettre à jour le post
    this.postService.updatePost(this.post.id, this.post).subscribe({
      // En cas de succès, on affiche un message et on redirige
      next: () => {
        this.toastr.success('Post mis à jour avec succès !');
        this.router.navigate(['/posts']);
        this.isSubmitting = false;
      },
      // En cas d'erreur, on affiche un message d'erreur
      error: () => {
        this.toastr.error('Erreur lors de la mise à jour du post.');
        this.isSubmitting = false;
      },
    });
  }

  // Méthode pour revenir à la liste des posts
  onReturn(): void {
    this.router.navigate(['/posts']);
  }
}
