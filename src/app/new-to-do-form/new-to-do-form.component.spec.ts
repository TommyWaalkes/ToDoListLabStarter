import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewToDoFormComponent } from './new-to-do-form.component';

describe('NewToDoFormComponent', () => {
  let component: NewToDoFormComponent;
  let fixture: ComponentFixture<NewToDoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewToDoFormComponent]
    });
    fixture = TestBed.createComponent(NewToDoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
