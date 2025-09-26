import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeModalComponent } from './compose-modal.component';

describe('ComposeModalComponent', () => {
  let component: ComposeModalComponent;
  let fixture: ComponentFixture<ComposeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
