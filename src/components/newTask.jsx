import { useState } from 'react';

function NewTask({onAddTask}){
    const [enteredTask, setEnteredTask] = useState();

    function handleChange(event){
        const {value} = event.target;
        setEnteredTask(value);
    }

    function handleAddTask(){
        setEnteredTask('');
        onAddTask(enteredTask)
    }

    return <div>
        <input onChange={handleChange} value={enteredTask}  type="text" className="pl-2 pr-20 bg-slate-button border-solid border-stone-300 rounded-sm py-1 mb-5" />
        <button onClick={handleAddTask} className="ml-5 text-stone-400 hover:text-fuchsia-700">Add Task</button>
    </div>
}

export default NewTask;