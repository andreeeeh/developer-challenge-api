import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../interfaces/comment';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.scss'
})
export class AddCommentComponent {
  @Input()
  postId!: number
  @Output() addCommentEvent = new EventEmitter<Comment>()

  commentForm!: FormGroup

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      postId: new FormControl(this.postId),
      parent_id: new FormControl(null),
      user: new FormControl('',
        Validators.required),
      date: new FormControl(new Date().toISOString().split('T')[0]),
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
    })
  }

  handleSubmitComment() {
    this.commentService.addComment(this.commentForm.value)
      .subscribe(data => this.addCommentEvent.emit(data))
  }

}
