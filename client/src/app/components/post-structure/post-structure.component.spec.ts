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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
