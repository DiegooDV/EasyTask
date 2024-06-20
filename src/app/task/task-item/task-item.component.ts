import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
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
  @Output() complete = new EventEmitter<string>();


  onCompleteTask(){
    this.complete.emit(this.task.id);
  }
}
