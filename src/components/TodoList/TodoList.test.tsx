import { cleanup, render, screen } from '@testing-library/react';
import { TodoList } from './TodoList';

afterEach(() => cleanup());

describe('TodoList component', () => {
  const currentTime = Date.now();
  const initialTasks = [
    {
      id: currentTime,
      text: 'Task 1',
      isDone: true,
    },
    {
      id: currentTime + 1,
      text: 'Task 2',
      isDone: false,
    },
    {
      id: currentTime + 2,
      text: 'Task 3',
      isDone: false,
    },
    {
      id: currentTime + 3,
      text: 'Task 4',
      isDone: true,
    },
    {
      id: currentTime + 4,
      text: 'Task 5',
      isDone: true,
    }
  ]

  test('should have passed tasks', () => {
    render(<TodoList initialTasks={initialTasks} />);
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
    expect(screen.getByText('Task 4')).toBeInTheDocument();
    expect(screen.getByText('Task 5')).toBeInTheDocument();
  });

  test('should render completed and uncompleted tasks in separated columns', () => {
    render(<TodoList initialTasks={initialTasks} />);
    
    const uncompletedTasksCol = screen.getByTestId('uncompleted-tasks');
    expect(uncompletedTasksCol).toHaveTextContent('Task 2');
    expect(uncompletedTasksCol).toHaveTextContent('Task 3');
    
    const completedTasksCol = screen.getByTestId('completed-tasks');
    expect(completedTasksCol).toBeInTheDocument();
    expect(completedTasksCol).toHaveTextContent('Task 1');
    expect(completedTasksCol).toHaveTextContent('Task 4');
  })
})