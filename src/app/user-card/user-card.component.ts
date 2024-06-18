import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../../data/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
let random = Math.random()
console.log(random)
console.log(random * DUMMY_USERS.length)
console.log(Math.floor(random * DUMMY_USERS.length))


@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]); 
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  
  //get imagePath() {
  //  return 'assets/users/' + this.selectedUser().avatar
  //}

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
}
