import { ITask } from "../types";

export function getTasksFromLocalStorage(): ITask[] | null {
  try {
    return JSON.parse(localStorage.getItem('tasks') || '') || [];
  } catch (error) {
    console.log(error);
    localStorage.clear();
    return null;
  }
}