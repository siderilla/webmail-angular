import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailDetailActionsComponent } from './mail-detail-actions.component';

describe('MailDetailActionsComponent', () => {
  let component: MailDetailActionsComponent;
  let fixture: ComponentFixture<MailDetailActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailDetailActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailDetailActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
