import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post.interface';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from '../common/post-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.html',
  styleUrls: ['./posts.css'],
  imports: [ CommonModule, RouterLink ]
})
export class Posts implements OnInit {
  posts!: Post[];
  errorMessage = '';
  deletedPost: number[] = [];

  constructor(
    private postService: PostsService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (data) => (this.posts = data),
      error: (err) => {
        this.toastr.error('Erreur serveur');
        this.errorMessage = 'Impossible de charger les posts.';
      },
    });
  }
  onDelete(id: number): void {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce post ?')) {
    this.postService.deletePost(id).subscribe({
      next: () => {
        this.toastr.success('Post supprimé avec succès');
        this.deletedPost.push(id) // mise à jour locale
      },
      error: () => {
        this.toastr.error('Échec de la suppression du post');
      }
    });
  }
}
onEdit(id: number): void {
  this.router.navigate([`posts/${id}/edit`]);
}

onView(id: number): void {
  this.router.navigate(['/posts', id]);
}


  onCreate() {
    this.router.navigate(['posts/create']);
  }

  trackById(index: number, post: Post): number {
  return post.id ?? index; // fallback si id est undefined
  }
}
