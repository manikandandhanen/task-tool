import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskToolComponent } from './components/task-tool-demo/task-tool.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, TaskToolComponent],
})
export class AppComponent {
  title = 'task-management-tool';
}
