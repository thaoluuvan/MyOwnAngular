import { Injectable } from '@angular/core';
import { from, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from 'post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsUpdated = new Subject<Post[]>();
  posts: Post[] = [];

  apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  // post
  addPost(title: string, author: string) {
    this.http.post(this.apiUrl, { title: title, author: author }).subscribe( res => {
      console.log('Added post successfully!');
      this.getPosts();
    });
  }
  // get
  getPosts() {
    this.http.get<Post[]>(this.apiUrl).subscribe((responeData) => {
       this.posts = responeData;
      console.log(responeData);
      console.log('Get post successfully!');
      this.postsUpdated.next([...this.posts]);
    });
  }
  // delete
  deletePost() {
    console.log('Deleted post successfully!');
  }
  // get PostUpdate
  getPostsUpdated() {
   return this.postsUpdated.asObservable();
  }
}
