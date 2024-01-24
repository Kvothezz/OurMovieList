import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistViewComponent } from './movielist-view.component';

describe('MovielistViewComponent', () => {
  let component: MovielistViewComponent;
  let fixture: ComponentFixture<MovielistViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovielistViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovielistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
