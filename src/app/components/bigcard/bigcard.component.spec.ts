import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigcardComponent } from './bigcard.component';

describe('BigcardComponent', () => {
  let component: BigcardComponent;
  let fixture: ComponentFixture<BigcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
