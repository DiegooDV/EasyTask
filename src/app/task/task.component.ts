import { Component, Input } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { DUMMY_TASKS } from '../../data/dummy-tasks';
import { TaskModalComponent } from './task-input/task-modal.component';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskItemComponent, TaskModalComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true }) userId! : string;
  @Input({required: true }) name! : string;
  isAddingTask = false;
  tasks = DUMMY_TASKS

  get selectedUserTasks() {
    return this.tasks.filter((task => task.userId === this.userId))
  }

  onCompleteTask(taskId: string){
    this.tasks = this.tasks.filter(task => taskId !== task.id)
  }

  onAddTask() {
    this.isAddingTask = true
  }

  onCancel() {
    this.isAddingTask = false
  }
}

