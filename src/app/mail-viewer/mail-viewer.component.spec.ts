import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailViewerComponent } from './mail-viewer.component';

describe('MailViewerComponent', () => {
  let component: MailViewerComponent;
  let fixture: ComponentFixture<MailViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
