import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cx1Component } from './cx1.component';

describe('Cx1Component', () => {
  let component: Cx1Component;
  let fixture: ComponentFixture<Cx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cx1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
