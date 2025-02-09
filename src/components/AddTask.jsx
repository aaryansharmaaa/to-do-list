import React, { useState } from 'react';

const AddTask = ({ getTask}) => {
    const [formData, setFormData] = useState({
        id: crypto.randomUUID(),
        text: "",
        description: ""
    });

    const changeData = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("The assigned task is", formData);
        getTask(formData);
        setFormData({
            id: crypto.randomUUID(),
            text: "",
            description: ""
        });
    };

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6'>
            <h3 className='text-center text-4xl font-extrabold text-red-600 mb-8'>
                Add New Task
            </h3>

            <div className='w-full max-w-lg bg-white shadow-2xl rounded-xl p-8'>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className='block text-xl font-medium text-gray-700 mb-2'>Task</label>
                        <input
                            type="text"
                            value={formData.text}
                            name="text"
                            onChange={changeData}
                            placeholder='Enter the task...'
                            className='w-full mt-2 px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300 ease-in-out'
                        />
                    </div>

                    <div>
                        <label className='block text-xl font-medium text-gray-700 mb-2'>Description</label>
                        <input
                            type="text"
                            value={formData.description}
                            name="description"
                            onChange={changeData}
                            placeholder='Enter the description...'
                            className='w-full mt-2 px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300 ease-in-out'
                        />
                    </div>

                    <button
                        type='submit'
                        className='w-full py-3 text-xl font-bold text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 transition-all duration-300 rounded-lg shadow-md'>
                        Submit Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;
