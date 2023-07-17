import { Component } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
username:string=''
constructor(private postService:PostService){}
createPost(){
  if(this.username.trim()==""){
    return
  }
  this.postService.createPost(this.username)
  this.username=''
}
}
