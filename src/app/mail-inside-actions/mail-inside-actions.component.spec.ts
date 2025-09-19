import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailInsideActionsComponent } from './mail-inside-actions.component';

describe('MailInsideActionsComponent', () => {
  let component: MailInsideActionsComponent;
  let fixture: ComponentFixture<MailInsideActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailInsideActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailInsideActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
