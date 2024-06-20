import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../data/dummy-tasks';
import { TaskInput } from './task-input/task-input.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly LOCAL_STORAGE_TASKS_KEY = 'tasks';
  private tasks = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem(this.LOCAL_STORAGE_TASKS_KEY);

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskInput: TaskInput, userId: string) {
    this.tasks.push({
      ...taskInput,
      userId: userId,
      id: new Date().getMilliseconds().toString(),
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => taskId !== task.id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem(
      this.LOCAL_STORAGE_TASKS_KEY,
      JSON.stringify(this.tasks)
    );
  }
}
