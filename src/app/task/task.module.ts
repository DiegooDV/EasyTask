import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TaskComponent } from "./task.component";
import { TaskItemComponent } from "./task-item/task-item.component";
import { TaskModalComponent } from "./task-input/task-modal.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [TaskComponent, TaskItemComponent, TaskModalComponent],
    exports: [TaskComponent],
    imports: [CommonModule, FormsModule, SharedModule]
})
export class TaskModule {}