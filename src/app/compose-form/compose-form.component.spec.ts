import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeFormComponent } from './compose-form.component';

describe('ComposeFormComponent', () => {
  let component: ComposeFormComponent;
  let fixture: ComponentFixture<ComposeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
