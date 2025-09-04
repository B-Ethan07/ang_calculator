import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOutput } from './button-output';

describe('ButtonOutput', () => {
  let component: ButtonOutput;
  let fixture: ComponentFixture<ButtonOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonOutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonOutput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
