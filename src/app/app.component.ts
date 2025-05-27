import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Task {
  name: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'signals-example';

  name = signal('Sebastian Signals');

  tasks = signal<Task[]>([
    { name: 'Task 1', isCompleted: false },
    { name: 'Task 2', isCompleted: true },
    { name: 'Task 3', isCompleted: false },
  ]);

  age = signal(29);

  changeName() {
    this.name.set('Sebastian Signals Updated');
  }
  changeAge() {
    this.age.set(30);
  }
  addTask() {
    this.tasks.update((tasks) => [
      ...tasks,
      { name: `Task ${tasks.length + 1}`, isCompleted: false },
    ]);
  }
  markTaskAsCompleted() {
    this.tasks.update((tasks) => {
      const updatedTasks = [...tasks];
      updatedTasks[0].isCompleted = true;
      updatedTasks[0].name = 'Task 1 - Completed';

      return updatedTasks;
    });
  }
}
