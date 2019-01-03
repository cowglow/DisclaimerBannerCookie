import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerBannerComponent } from './disclaimer-banner.component';

describe('DisclaimerBannerComponent', () => {
  let component: DisclaimerBannerComponent;
  let fixture: ComponentFixture<DisclaimerBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisclaimerBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimerBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
