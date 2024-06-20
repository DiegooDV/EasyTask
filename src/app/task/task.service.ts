import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../../data/dummy-tasks";
import { TaskInput } from "./task-input/task-input.model";

@Injectable({providedIn: "root"})
export class TaskService {
    private tasks = DUMMY_TASKS;

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskInput: TaskInput, userId: string) {
    this.tasks.push({
        ...taskInput,
        userId: userId,
        id: new Date().getMilliseconds().toString(),
        });
    }

    removeTask(taskId: string){
        this.tasks = this.tasks.filter((task) => taskId !== task.id);
    }
}
