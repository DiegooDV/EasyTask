import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.css'
})
export class TaskModalComponent {
  @Output() cancel = new EventEmitter<void>()

  onCancel() {
    this.cancel.emit();
  }
}
