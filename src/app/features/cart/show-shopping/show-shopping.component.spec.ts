import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShoppingComponent } from './show-shopping.component';

describe('ShowShoppingComponent', () => {
  let component: ShowShoppingComponent;
  let fixture: ComponentFixture<ShowShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowShoppingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
