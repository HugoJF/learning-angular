import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassToggleComponent } from './class-toggle.component';

describe('ClassToggleComponent', () => {
  let component: ClassToggleComponent;
  let fixture: ComponentFixture<ClassToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
