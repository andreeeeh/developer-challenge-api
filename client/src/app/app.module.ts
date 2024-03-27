import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { FeedComponent } from './components/feed/feed.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { CommentStructureComponent } from './components/comment-structure/comment-structure.component';
import { PostStructureComponent } from './components/post-structure/post-structure.component';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostComponent,
    PostStructureComponent,
    CommentsComponent,
    CommentStructureComponent,
    AddCommentComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [provideRouter(routes, withComponentInputBinding())],
  bootstrap: [AppComponent]
})
export class AppModule { }
