import { Component, Input } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CardComponent, DatePipe],
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
