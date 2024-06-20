import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskInput } from './task-input.model';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.css'
})
export class TaskModalComponent {
  @Output() cancel = new EventEmitter<void>()
  @Output() submitTask = new EventEmitter<TaskInput>()

  title = '';
  summary = '';
  dueDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.submitTask.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    })
  }
}
