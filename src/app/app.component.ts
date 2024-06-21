import { Component } from '@angular/core';;
import { DUMMY_USERS } from '../data/dummy-users';

@Component({
  selector: 'app-root',
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
