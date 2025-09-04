import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../common/post-service';
import { ToastrService } from 'ngx-toastr';
import { Post } from '../models/Post.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-details',
  imports: [ CommonModule ],
  templateUrl: './post-details.html',
  styleUrl: './post-details.css'
})
export class PostDetails {
  post!: Post;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.toastr.error('ID de post invalide.');
      this.router.navigate(['/posts']);
      return;
    }

    this.postService.getPost(id).subscribe({
      next: (data) => {
        this.post = data;
        this.isLoading = false;
      },
      error: () => {
        this.toastr.error('Erreur lors du chargement du post.');
        this.router.navigate(['/posts']);
      }
    });
  }
  onReturn(): void {
  this.router.navigate(['/posts']);
  }
}
