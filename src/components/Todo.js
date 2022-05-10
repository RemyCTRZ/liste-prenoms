import React, { useState } from 'react';
import './Todo.css';
    
function Task({ task, index, removeTask }) {
    return (
        <div
            className="task"
        >
            {task.title}
            <button style={{ background: "red" }} onClick={() => removeTask(index)}>X</button>
        </div>
    );
}
function Todo() {
    const [tasks, setTasks] = useState([
        {
            title: "Jean-Pierre",
        },
        {
            title: "React",
        },
        {
            title: "Paul",
        }
    ]);

    const addTask = title => {
        const newTasks = [...tasks, {title}];
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <div className="header">Liste de prénoms</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    removeTask={removeTask}
                    key={index}
                    />
                ))}
            </div>
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
        </div>
    );
}
    function CreateTask({ addTask }) {
        const [value, setValue] = useState("");
    
        const handleSubmit = e => {
            e.preventDefault();
            if (!value) return;
            
            addTask(value);
            setValue("");
        }
        
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    value={value}
                    placeholder="Prénom"
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        );
    }
    
    export default Todo;