import React, { useEffect, useState } from 'react';
import { fetchTasks, deleteTask } from '../../api';

function TaskList({ token }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const _fetchTasks = async () => {
      try {
        const response = await fetchTasks(token);
        setTasks(response.data);
      } catch (error) {
        console.error('Failed to fetch tasks:', error.response.data.message);
      }
    };
    _fetchTasks();
  }, [token]);

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId, token);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Failed to delete task:', error.response.data.message);
    }
  };

  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.due_date}</p>
            <p>Priority: {task.priority}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
