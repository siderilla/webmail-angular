import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailInsideComponent } from './mail-inside.component';

describe('MailInsideComponent', () => {
  let component: MailInsideComponent;
  let fixture: ComponentFixture<MailInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailInsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
