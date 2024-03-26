import { Component, Input } from '@angular/core';
import { Comment } from '../../interfaces/comment';

@Component({
  selector: 'app-comment-structure',
  templateUrl: './comment-structure.component.html',
  styleUrl: './comment-structure.component.scss'
})
export class CommentStructureComponent {
  @Input()
  comment!: Comment

}
