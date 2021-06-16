import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutContentsComponent } from './without-contents.component';

describe('WithoutContentsComponent', () => {
  let component: WithoutContentsComponent;
  let fixture: ComponentFixture<WithoutContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
