import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealWithLossComponent } from './deal-with-loss.component';

describe('DealWithLossComponent', () => {
  let component: DealWithLossComponent;
  let fixture: ComponentFixture<DealWithLossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealWithLossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealWithLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
