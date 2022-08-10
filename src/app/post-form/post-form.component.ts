import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<Post>();

  display:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  postForm(form:NgForm){
    let newPost:Post = {
      title: form.form.value.title,
      thought: form.form.value.thought,
      votes: 0
    };

    this.submitted.emit(newPost);
  }

  toggleDisplay():void{
    this.display = !this.display;
  }
}
