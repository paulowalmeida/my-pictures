import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFormContainerComponent } from './photo-form-container.component';

describe('PhotoFormContainerComponent', () => {
  let component: PhotoFormContainerComponent;
  let fixture: ComponentFixture<PhotoFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
