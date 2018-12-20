import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  addPost() {
   console.log('Added post successfully!');
  }

  getPosts() {
    console.log('Get post successfully!');
  }

  deletePost() {
    console.log('Deleted post successfully!');
  }
}
