import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { PhotoGaleryContainerComponent } from './photo-galery-container.component';

describe('PhotoGaleryComponent', () => {
  let component: PhotoGaleryContainerComponent;
  let fixture: ComponentFixture<PhotoGaleryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoGaleryContainerComponent],
      imports: [ActivatedRoute]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGaleryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
