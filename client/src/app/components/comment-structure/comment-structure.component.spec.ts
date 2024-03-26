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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
