import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-post',
  templateUrl: './social-post.component.html',
  styleUrls: ['./social-post.component.css']
})
export class SocialPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 posts: Post[] = [
  {
    title: "Love and Basketball",
    thought: "This is one of my favorite movies but i cant remember the ending? hmm ugh",
    votes:0
  },
  {
    title: "Frank and Beans",
    thought: "Do you remember that movie There's Something About Mary? Laugh Out Loud!",
    votes:0
  }
  ];

  AddToPosts(newPost:Post){
    //unshift adds to start of array
    this.posts.unshift(newPost);
  }

  DeletePost(targetP:Post):void{
    let index:number = this.posts.findIndex(p => p.thought == targetP.thought && p.title == targetP.title);
    this.posts.splice(index,1);
  }
}
