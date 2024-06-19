import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  //@Input({required: true}) avatar!: string;
  //@Input({required: true}) name!: string;
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() =>  'assets/users/' + this.avatar())
  
  //get imagePath() {
  //  return 'assets/users/' + this.selectedUser().avatar
  //}

  onSelectUser() {

  }
}
