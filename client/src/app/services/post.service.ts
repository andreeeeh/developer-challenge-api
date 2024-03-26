import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { environment } from '../../ environment/ environment'


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.rootUrl}/posts?_sort=publish_date&_order=desc`)
  }

  getOnePost(id: number): Observable<Post> {
    return this.http.get<Post>(`${environment.rootUrl}/posts/${id}`)
  }

}
