import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2a } from './a2a';

describe('A2a', () => {
  let component: A2a;
  let fixture: ComponentFixture<A2a>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A2a]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A2a);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
