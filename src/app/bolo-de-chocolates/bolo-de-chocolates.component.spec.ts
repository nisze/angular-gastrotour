import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoloDeChocolatesComponent } from './bolo-de-chocolates.component';

describe('BoloDeChocolatesComponent', () => {
  let component: BoloDeChocolatesComponent;
  let fixture: ComponentFixture<BoloDeChocolatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoloDeChocolatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoloDeChocolatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
