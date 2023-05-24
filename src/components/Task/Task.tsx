import React, { FC } from 'react'
import { ITask } from '../../types'
import { formatDateForCard } from '../../helpers/formatDateForCard';

type TaskProps = {
  task: ITask,
  deleteTask: (taskId: number) => void,
  toggleIsDone?: (taskId: number) => void,
}

export const Task: FC<TaskProps> = ({ task, deleteTask, toggleIsDone }) => {

  function onToggleButton() {
    if (!toggleIsDone) return;
    toggleIsDone(task.id)
  }

  function onDelete() {
    deleteTask(task.id)
  }

  return (
    <div className="card mb-2">
      
      <div className="card-header">
        Creation date: {formatDateForCard(task.id)}
      </div>

      <div className="card-body">
        <p className={"card-text " + (task.isDone ? 'text-decoration-line-through' : '')}>{task.text}</p>
      </div>

      <div className="card-footer">
        {
          !task.isDone ?
          <button className='btn btn-outline-success me-2' onClick={onToggleButton}>
            Mark as done
          </button> :
          <button className='btn btn-outline-primary me-2' onClick={onToggleButton}>
            Mark as undone
          </button> 
        }
        <button className='btn btn-outline-danger' onClick={onDelete}>
          Delete
        </button>
      </div>
      
    </div>
  )
}