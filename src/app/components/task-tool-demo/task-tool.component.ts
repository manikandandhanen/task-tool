import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Task {
  description: string;
}

@Component({
  selector: 'task-tool',
  standalone: true,
  imports: [
    CdkDropList,
    CdkDrag,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
  ],
  templateUrl: './task-tool.component.html',
  styleUrl: './task-tool.component.scss',
})
export class TaskToolComponent {
  newTask: string = '';
  searchQuery: string = '';

  tasks: { [key: string]: Task[] } = {
    todo: [
      { description: 'Get to work' },
      { description: 'Go home' },
      { description: 'Fall asleep' },
    ],
    inProgress: [{ description: 'Pick up groceries' }],
    completed: [
      { description: 'Get up' },
      { description: 'Brush teeth' },
      { description: 'Take a shower' },
      { description: 'Check e-mail' },
      { description: 'Walk dog' },
    ],
  };

  addTask() {
    if (this.newTask.trim()) {
      this.tasks['todo'].push({ description: this.newTask.trim() });
      this.newTask = '';
    }
  }

  deleteTask(task: Task, column: string) {
    this.tasks[column] = this.tasks[column].filter((t) => t !== task);
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getFilteredTasks(column: string): Task[] {
    return this.tasks[column].filter((task) =>
      task.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
