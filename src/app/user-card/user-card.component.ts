import { Component, EventEmitter, Input, Output} from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
