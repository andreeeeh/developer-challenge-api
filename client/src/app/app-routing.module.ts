import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { PostComponent } from './components/post/post.component';

export const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
  },
  {
    path: 'post/:id/:slug',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
