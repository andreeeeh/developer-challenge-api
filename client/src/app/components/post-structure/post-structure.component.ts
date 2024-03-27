import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-post-structure',
  templateUrl: './post-structure.component.html',
  styleUrl: './post-structure.component.scss'
})
export class PostStructureComponent {
  @Input()
  post!: Post

  constructor(public router: Router) { }
}
