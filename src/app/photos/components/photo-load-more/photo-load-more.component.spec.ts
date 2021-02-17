import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoLoadMoreComponent } from './photo-load-more.component';

describe('PhotoLoadMoreComponent', () => {
  let component: PhotoLoadMoreComponent;
  let fixture: ComponentFixture<PhotoLoadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoLoadMoreComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoLoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
