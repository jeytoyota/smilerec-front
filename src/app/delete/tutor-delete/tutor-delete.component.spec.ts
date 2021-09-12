import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorDeleteComponent } from './tutor-delete.component';

describe('TutorDeleteComponent', () => {
  let component: TutorDeleteComponent;
  let fixture: ComponentFixture<TutorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
