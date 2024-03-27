import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../interfaces/comment';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit {

  @Input()
  postId!: number

  comments!: Comment[]

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getCommentsById(this.postId)
      .subscribe(data => this.comments = data)
  }

  addComment(comment: Comment) {
    this.comments.push(comment)
  }
}
