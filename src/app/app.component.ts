import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './user-card/user-card.component';
import { DUMMY_USERS } from '../data/dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserCardComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser () {
    return this.users.find(x => x.id === this.selectedUserId)
  }

  onSelectUser(id: string) {
    this.selectedUserId = id
  }
}
