import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostStructureComponent } from './post-structure.component';

describe('PostStructureComponent', () => {
  let component: PostStructureComponent;
  let fixture: ComponentFixture<PostStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostStructureComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostStructureComponent);
    component = fixture.componentInstance;
    component.post = {
      id: 0,
      title: "test title",
      author: "test author",
      publish_date: "2024-01-01",
      slug: "test slug",
      description: "test description",
      content: "content test"
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
