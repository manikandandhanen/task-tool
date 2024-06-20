import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskToolDemoComponent } from './task-tool-demo.component';

describe('TaskToolDemoComponent', () => {
  let component: TaskToolDemoComponent;
  let fixture: ComponentFixture<TaskToolDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskToolDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskToolDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
