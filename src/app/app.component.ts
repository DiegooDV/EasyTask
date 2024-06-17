import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
}
