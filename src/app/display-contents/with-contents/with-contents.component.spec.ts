import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithContentsComponent } from './with-contents.component';

describe('WithContentsComponent', () => {
  let component: WithContentsComponent;
  let fixture: ComponentFixture<WithContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
