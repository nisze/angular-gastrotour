import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cx2Component } from './cx2.component';

describe('Cx2Component', () => {
  let component: Cx2Component;
  let fixture: ComponentFixture<Cx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cx2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
