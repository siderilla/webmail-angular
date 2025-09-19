import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MailListActionsComponent } from './mail-list-actions.component';

describe('MailListActionsComponent', () => {
  let component: MailListActionsComponent;
  let fixture: ComponentFixture<MailListActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailListActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
