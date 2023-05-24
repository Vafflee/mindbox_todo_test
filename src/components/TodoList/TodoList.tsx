import React, { FC, useEffect, useMemo, useState } from 'react'
import NewTaskForm from '../NewTaskForm/NewTaskForm'
import { ITask } from '../../types';
import { TaskList } from '../TaskList/TaskList';
import { saveTasksToLocalStorage } from '../../helpers/saveTasksToLocalStorage';

type TodoListProps = {
  initialTasks?: ITask[]
}

export const TodoList: FC<TodoListProps> = ({ initialTasks }) => {

  const [tasks, setTasks] = useState<ITask[]>(initialTasks ?? []);
  
  function createNewTask(text: string) {
    setTasks([...tasks, {
      id: Date.now(),
      text: text,
      isDone: false
    }]);
  }

  function toggleIsDone(taskId: number) {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        task.isDone =!task.isDone;
      }
      return task;
    }));
  }

  function deleteTask(taskId: number) {
    setTasks(tasks.filter(task => task.id!== taskId));
  }

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks])
  

  const completedTasks = useMemo(() => tasks.filter(task => task.isDone), [tasks]);
  const uncompletedTasks = useMemo(() => tasks.filter(task => !task.isDone), [tasks]);

  return (
    <div className='d-flex flex-column'>
      <NewTaskForm onSubmit={createNewTask} />
      <div className="row">
        <div className="col-12 col-xl-6" data-testid='uncompleted-tasks'>
          <TaskList 
            title='Uncompleted tasks' 
            emptyText='There is no uncompleted tasks yet' 
            tasks={uncompletedTasks} 
            toggleIsDone={toggleIsDone}
            deleteTask={deleteTask} 
          />
        </div>
        <div className="col-12 col-xl-6" data-testid='completed-tasks'>
          <TaskList 
            title='Completed tasks' 
            emptyText='There is no completed tasks yet' 
            tasks={completedTasks} 
            toggleIsDone={toggleIsDone}
            deleteTask={deleteTask} 
          />
        </div>
      </div>
    </div>
  )
}