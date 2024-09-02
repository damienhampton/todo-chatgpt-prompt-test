import React from 'react';
import TaskForm from '../components/Tasks/TaskForm';
import TaskList from '../components/Tasks/TaskList';

function Tasks({ token }) {
  return (
    <div>
      <h1>Tasks</h1>
      <TaskForm token={token} />
      <TaskList token={token} />
    </div>
  );
}

export default Tasks;