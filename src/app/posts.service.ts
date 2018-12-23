import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from 'post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apiUrl = 'http://localhost:3004/posts';

  constructor(private http: HttpClient) { }

  addPost() {
   console.log('Added post successfully!');
   alert('Added post successfully!');
  }

  getPosts() {
    this.http.get<{posts: Post[]}>(this.apiUrl).subscribe((responeData) => {
      console.log(responeData);
    });
    console.log('Get post successfully!');
  }

  deletePost() {
    console.log('Deleted post successfully!');
  }
}
