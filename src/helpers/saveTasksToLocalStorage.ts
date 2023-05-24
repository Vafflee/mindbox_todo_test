import { ITask } from "../types";

export function saveTasksToLocalStorage(tasks: ITask[]): void {
  try {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error(error);
  }
}