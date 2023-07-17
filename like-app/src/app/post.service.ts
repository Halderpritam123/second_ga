import { Injectable } from '@angular/core';
import { Post } from './post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
private posts:Post[]=[]
  constructor() { }
  createPost(username:string){
  const newPost:Post={
    id:this.posts.length+1,
    username,
    likes:0
  }
  this.posts.push(newPost)
}
getAllPosts():Post[]{
  return this.posts
}
deletePost(id:number){
  const index=this.posts.findIndex((post)=>post.id===id);
  if(index!==-1){
    this.posts.splice(index,1)
  }
}
likePost(id:number){
  const post=this.posts.find(like=>like.id==id)
  if(post){
    post.likes++
  }
}
}
