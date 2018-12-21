import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  addPost() {
   console.log('Added post successfully!');
   alert('Added post successfully!');
  }

  getPosts() {
    console.log('Get post successfully!');
  }

  deletePost() {
    console.log('Deleted post successfully!');
  }
}
