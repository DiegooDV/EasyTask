import { Component, Input } from '@angular/core';
import { TaskService } from './task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private taskService: TaskService ) {}
  
  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onAddTask() {
    this.isAddingTask = true;
  }

  onClose() {
    this.isAddingTask = false;
  }
}
