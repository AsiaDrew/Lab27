import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  @Input() post:Post = {} as Post;
  @Output() deleted = new EventEmitter<Post>();
  /*
@Input() post:Post = {
  title: "",
  thought: ""
};
  */

  constructor() { }

  ngOnInit(): void {
  }
upvote():void{
  this.post.votes++;
}
 
downvote():void{
  this.post.votes--;
}

delete():void{
  this.deleted.emit(this.post)
}

}
