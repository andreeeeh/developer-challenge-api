import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../interfaces/comment';
import { environment } from '../../ environment/ environment'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getCommentsById(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.rootUrl}/post/${id}/comments`)
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${environment.rootUrl}/post/${comment.postId}/comments`, comment)
  }

}
