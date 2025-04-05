import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaveDeMorangoComponent } from './pave-de-morango.component';

describe('PaveDeMorangoComponent', () => {
  let component: PaveDeMorangoComponent;
  let fixture: ComponentFixture<PaveDeMorangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaveDeMorangoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaveDeMorangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
