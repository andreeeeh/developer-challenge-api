import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-post-structure',
  templateUrl: './post-structure.component.html',
  styleUrl: './post-structure.component.scss'
})
export class PostStructureComponent {
  @Input()
  post!: Post
}
