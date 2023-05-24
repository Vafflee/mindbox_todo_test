import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { TodoList } from './components/TodoList/TodoList';
import { ITask } from './types';
import { getTasksFromLocalStorage } from './helpers/getTasksFromLocalStorage';

export const App = () => {

  // get Tasks from localStorage
  const tasks: ITask[] = getTasksFromLocalStorage() || [];

  return (
    <div className={'container w-50'}>
      <h1 className='mt-5'>My todos</h1>
      <TodoList initialTasks={tasks}/>
    </div>
  );
}
