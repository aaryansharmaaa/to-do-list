import React, { useState } from 'react';
import AddTask from './AddTask';

const Task = () => {
    const [tasks, setTasks] = useState(() => {
        const finalTask = localStorage.getItem('task');
        return finalTask ? JSON.parse(finalTask) : [];
    });

    const getTask = (newTask) => {
        const updatedTask = [...tasks, newTask];
        setTasks(updatedTask);
        localStorage.setItem('task', JSON.stringify(updatedTask));
    };

    const onDelete = (id) => {
        console.log("I am deleting this entry", id);
        const updatedTask = tasks.filter((e) => e.id !== id);
        setTasks(updatedTask);
        localStorage.setItem('task', JSON.stringify(updatedTask)); 
    };

    return (
        <div className='min-h-screen bg-gray-100 py-10 px-6'>
            <h3 className='text-center text-4xl font-extrabold text-red-600 mb-8'>
                Tasks
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                {tasks.map((data) => (
                    <div
                        key={data.id}
                        className='bg-white shadow-lg rounded-xl p-6 border-l-4 border-red-500 hover:scale-105 transition-all duration-300'>
                        <h4 className='text-xl font-semibold text-gray-800 mb-2'>{data.text}</h4>
                        <p className='text-gray-600 mb-4'>{data.description}</p>
                        <button
                            onClick={() => onDelete(data.id)}
                            className='px-4 py-2 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition-all duration-300'>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            <AddTask getTask={getTask} />
        </div>
    );
};

export default Task;
