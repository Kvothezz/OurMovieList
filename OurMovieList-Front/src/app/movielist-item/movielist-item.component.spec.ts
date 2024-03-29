import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistItemComponent } from './movielist-item.component';

describe('MovielistItemComponent', () => {
  let component: MovielistItemComponent;
  let fixture: ComponentFixture<MovielistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovielistItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovielistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
