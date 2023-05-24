import { cleanup, render, screen } from '@testing-library/react';
import { Task } from './Task';
import { ITask } from '../../types';

afterEach(() => cleanup());

describe('Task component', () => {
  const taskInfo: ITask = {
    id: Date.now(),
    text: 'New task text',
    isDone: false
  }
  const deleteTask = jest.fn();
  const toggleIsDone = jest.fn();

  test('Uncompleted task should have button with text: Mark as done', () => {
    render(<Task task={taskInfo} deleteTask={deleteTask} toggleIsDone={toggleIsDone} />);
    const button = screen.getByText('Mark as done');
    expect(button).toBeInTheDocument();
  })

  test('Completed task should have button with text: Mark as undone', () => {
    taskInfo.isDone = true;
    render(<Task task={taskInfo} deleteTask={deleteTask} toggleIsDone={toggleIsDone} />);
    const button = screen.getByText('Mark as undone');
    expect(button).toBeInTheDocument();
  })
})