import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CommentService } from './comment.service';
import {environment} from '../../ environment/ environment'

describe('CommentService', () => {
  let service: CommentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentService]
    });
    service = TestBed.inject(CommentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify())
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a comment', () => {
       const mockComment = {
      id: 1,
      postId: 1,
      parent_id: 1,
      user: 'test user',
      date: '2022-01-01',
      content: 'test content'
      };
    
    service.addComment(mockComment).subscribe(comment => {
      expect(comment).toEqual(mockComment)
    });
    const req = httpMock.expectOne(`${environment.rootUrl}/post/${mockComment.postId}/comments`)
    expect(req.request.method).toBe('POST');
    req.flush(mockComment);
  })
});
