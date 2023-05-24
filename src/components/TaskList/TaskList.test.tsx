import { cleanup, render, screen } from '@testing-library/react';
import { TaskList } from './TaskList';

afterEach(() => cleanup());

describe('TaskList component', () => {

  const title = 'Task list title';
  const toggleIsDone = jest.fn();
  const deleteTask = jest.fn();
  const currentTime = Date.now();
  const tasks = [
    {
      id: currentTime,
      text: 'Task 1',
      isDone: false
    },
    {
      id: currentTime + 1,
      text: 'Task 2',
      isDone: false
    },
    {
      id: currentTime + 2,
      text: 'Task 3',
      isDone: false
    },
  ]
  
  test('Empty TaskList should have text "No tasks"', () => {
    render(<TaskList tasks={[]} emptyText={'No tasks'} title={title} toggleIsDone={toggleIsDone} deleteTask={deleteTask}/>);
    expect(screen.getByText('No tasks')).toBeInTheDocument();
  });

  test('TaskList should have title', () => {
    render(<TaskList tasks={tasks} emptyText={'No tasks'} title={title} toggleIsDone={toggleIsDone} deleteTask={deleteTask}/>);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test('TaskList should have tasks', () => {
    render(<TaskList tasks={tasks} emptyText={'No tasks'} title={title} toggleIsDone={toggleIsDone} deleteTask={deleteTask}/>);
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
  })

})