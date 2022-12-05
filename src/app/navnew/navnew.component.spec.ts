import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavnewComponent } from './navnew.component';

describe('NavnewComponent', () => {
  let component: NavnewComponent;
  let fixture: ComponentFixture<NavnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
