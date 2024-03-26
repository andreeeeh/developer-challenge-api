import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
  standalone: false,
})
export class FeedComponent {
  posts!: Post[];

  constructor(
    private postService: PostService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(data => { this.posts = data })
    this.title.setTitle('My Blog: Home')
    this.meta.updateTag(
      { name: 'description', content: 'This is the timeline of My Blog' }
    )
  }

}
