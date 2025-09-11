import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailActionsComponent } from './mail-actions.component';

describe('MailActionsComponent', () => {
  let component: MailActionsComponent;
  let fixture: ComponentFixture<MailActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
