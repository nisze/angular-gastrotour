import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallkekComponent } from './smallkek.component';

describe('SmallkekComponent', () => {
  let component: SmallkekComponent;
  let fixture: ComponentFixture<SmallkekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallkekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallkekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
