import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostService } from './post.service';
import { environment } from '../../ environment/ environment';



describe('PostService', () => {
  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService]
    });
    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify())

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch posts', () => {
    const mockPost = [{
      id: 1,
      title: 'test',
      author: 'test author',
      publish_date: '2022-01-01',
      slug: 'test slug',
      description: 'test description',
      content: 'test content'
    }];

    service.getPosts().subscribe(posts => {
      expect(posts.length).toBe(1);
      expect(posts).toEqual(mockPost);
    });
    const req = httpMock.expectOne(`${environment.rootUrl}/posts?_sort=publish_date&_order=desc`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPost);
  })

   it('should fetch one posts', () => {
    const mockPost = {
      id: 1,
      title: 'test',
      author: 'test author',
      publish_date: '2022-01-01',
      slug: 'test-slug',
      description: 'test description',
      content: 'test content'
    };
     const id = 1;

    service.getOnePost(id).subscribe(post => {
      expect(post.id).toBe(id);
      expect(post).toEqual(mockPost);
    });
    const req = httpMock.expectOne(`${environment.rootUrl}/posts/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPost);
  })
});
