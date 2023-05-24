import React, { FC } from 'react'
import { ITask } from '../../types'
import { Task } from '../Task/Task'

type TaskListProps = {
  title: string,
  emptyText: string,
  tasks: ITask[],
  toggleIsDone: (taskId: number) => void,
  deleteTask: (taskId: number) => void
}

export const TaskList: FC<TaskListProps> = ({ title, emptyText, tasks, toggleIsDone, deleteTask }) => {

  return (
    <div className="d-flex flex-column mt-3">
      <h5>{title}</h5>
      {
        tasks.length > 0 
        ? tasks.map(task => (
            <div key={task.id}>
              <Task task={task} toggleIsDone={() => toggleIsDone(task.id)} deleteTask={() => deleteTask(task.id)} />
            </div>
          ))
        : <p className='text-muted'>{emptyText}</p>
      }
    </div>
  )
}