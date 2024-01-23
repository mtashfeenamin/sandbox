import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushTrialComponent } from './on-push-trial.component';

describe('OnPushTrialComponent', () => {
  let component: OnPushTrialComponent;
  let fixture: ComponentFixture<OnPushTrialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnPushTrialComponent]
    });
    fixture = TestBed.createComponent(OnPushTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
