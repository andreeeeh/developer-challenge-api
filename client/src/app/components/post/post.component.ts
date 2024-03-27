import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {

  @Input()
  set id(value: number) {
    this.postId = value
  }

  postId!: number
  post!: Post

  constructor(
    private postSerive: PostService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.postSerive.getOnePost(this.postId)
      .subscribe(data => {
        this.post = data
        this.title.setTitle(`My Blog: ${this.post.title}`)
        this.meta.updateTag({ name: 'description', content: `This post is about: ${this.post.description}` })
        this.meta.addTags([{ name: 'author', content: `Written by: ${this.post.author}` },
        { name: 'publish date', content: `${this.post.publish_date}` }])
      })
  }
}