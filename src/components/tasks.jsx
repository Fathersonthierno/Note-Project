import { useRef, useState } from "react"
import NewTask from "./newTask"
import TaskList from "./taskList";

export default function Tasks({onAddTask, tasks, onDelete}){  

    return <div>
            <label htmlFor="" className="text-[1.5rem] font-bold mb-3 block">Tasks</label>
            <NewTask onAddTask={onAddTask}/>
            {tasks.length === 0 && <p>This project doesn't have any task yet</p>}
            {tasks.length > 0 && <ul className="flex flex-col gap-4 pt-3">
                {tasks.map(task =>{
                    return <li key={task.id} className="flex justify-between rounded-md bg-stone-300 py-4 px-2 ">
                           <span>{task.value}</span>
                           <button onClick={() => onDelete(task.id)} 
                           className="text-stone-400 hover:text-fuchsia-700">
                            Clear</button>
                          </li>
                })}
                
            </ul>}
            
        </div>

}