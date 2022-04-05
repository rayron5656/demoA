import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRXComponent } from './start-rx.component';

describe('StartRXComponent', () => {
  let component: StartRXComponent;
  let fixture: ComponentFixture<StartRXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartRXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartRXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
