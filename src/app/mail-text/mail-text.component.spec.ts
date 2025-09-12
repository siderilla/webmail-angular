import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailTextComponent } from './mail-text.component';

describe('MailTextComponent', () => {
  let component: MailTextComponent;
  let fixture: ComponentFixture<MailTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
