import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.css'
})
export class TaskModalComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>()

  title = '';
  summary = '';
  dueDate = '';

  private taskService = inject(TaskService)

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    }, this.userId)
    this.close.emit();
  }
}
