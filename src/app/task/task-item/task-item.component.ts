import { Component, Input } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() name?: string;
  @Input({ required: true }) task!: Task

  constructor(private taskService: TaskService ) {}

  onCompleteTask(){
    this.taskService.removeTask(this.task.id);
  }
}
