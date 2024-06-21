import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './user-card/user-card.component';
import { TaskComponent } from './task/task.component';
import { CardComponent } from './shared/card/card.component';
import { TaskModalComponent } from './task/task-input/task-modal.component';
import { TaskItemComponent } from './task/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserCardComponent,
    CardComponent,
    TaskComponent,
    TaskItemComponent,
    TaskModalComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
