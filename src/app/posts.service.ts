import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from 'post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // apiUrl = 'http://localhost:8000/api/posts'; // nodejs server
  apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  // post
  addPost(title: string, author: string) {
    this.http.post(this.apiUrl, { title: title, author: author }).subscribe( res => {
      console.log('Added post successfully!');
    });
  }
  // get
  getPosts() {
    this.http.get<{posts: Post[]}>(this.apiUrl).subscribe((responeData) => {
      console.log(responeData.posts);
    });
    console.log('Get post successfully!');
  }
  // delete
  deletePost() {
    console.log('Deleted post successfully!');
  }
}
