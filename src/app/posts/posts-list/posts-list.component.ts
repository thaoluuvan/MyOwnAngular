import { Component, OnInit } from '@angular/core';
import { Post } from 'post.model';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.postsUpdated.subscribe((posts) => {
      this.posts = posts;
    });
  }
}
