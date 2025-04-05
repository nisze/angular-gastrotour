import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cx3Component } from './cx3.component';

describe('Cx3Component', () => {
  let component: Cx3Component;
  let fixture: ComponentFixture<Cx3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cx3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cx3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
