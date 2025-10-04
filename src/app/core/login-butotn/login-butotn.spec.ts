import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginButotn } from './login-butotn';

describe('LoginButotn', () => {
  let component: LoginButotn;
  let fixture: ComponentFixture<LoginButotn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginButotn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginButotn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
