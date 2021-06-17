import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSwitchComponent } from './class-switch.component';

describe('ClassSwitchComponent', () => {
  let component: ClassSwitchComponent;
  let fixture: ComponentFixture<ClassSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
