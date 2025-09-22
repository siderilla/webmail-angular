import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLogoMenuComponent } from './header-logo-menu.component';

describe('HeaderLogoMenuComponent', () => {
  let component: HeaderLogoMenuComponent;
  let fixture: ComponentFixture<HeaderLogoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLogoMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLogoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
