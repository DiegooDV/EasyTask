import { Component, Input } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { DUMMY_TASKS } from '../../data/dummy-tasks';
import { TaskModalComponent } from './task-input/task-modal.component';
import { TaskInput } from './task-input/task-input.model';
import { TaskService } from './task.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskItemComponent, TaskModalComponent],
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

  onCompleteTask(taskId: string) {
    this.taskService.removeTask(taskId);
  }

  onAddTask() {
    this.isAddingTask = true;
  }

  onClose() {
    this.isAddingTask = false;
  }
}
