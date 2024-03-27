import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentStructureComponent } from './comment-structure.component';

describe('CommentStructureComponent', () => {
  let component: CommentStructureComponent;
  let fixture: ComponentFixture<CommentStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentStructureComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CommentStructureComponent);
    component = fixture.componentInstance;
    component.comment = {
      id: 0,
      postId: 0,
      parent_id: 0,
      user: "test user",
      date: "2024-01-01",
      content: "test content"
    },
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
