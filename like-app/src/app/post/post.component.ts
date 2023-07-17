import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts:Post[]=[]
  constructor(private postService : PostService) {}
  ngOnInit() {
    this.posts=this.postService.getAllPosts();
  }
  deletePost(id:number){
    this.postService.deletePost(id)
  }  
  likePost(id:number){
    this.postService.likePost(id)
  }
}
