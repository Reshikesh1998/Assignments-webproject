import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopstudentComponent } from './topstudent.component';

describe('TopstudentComponent', () => {
  let component: TopstudentComponent;
  let fixture: ComponentFixture<TopstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
