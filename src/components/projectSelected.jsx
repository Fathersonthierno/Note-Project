import { useRef, useState } from "react"
import Tasks from "./tasks";

export default function ProjectSelected({project, onDelete, onAddTask, onDeleteTask, tasks}){
    const formattedDate= new Date(project.dueDate).toLocaleDateString('en-ML', {
        year:'numeric',
        month:'short',
        day:'numeric'
    });
 return (
    <section className="flex flex-col gap-4 px-8 py-8 mt-20  w-[38%]">
        <header className="border-b-4 border-neutral-400 pb-4">
           <div className="flex flex-row justify-between">
            <h1 className="text-[1.5rem] font-bold">{project.title}</h1>
            <button onClick={onDelete} className="text-stone-400 hover:text-fuchsia-700">Delete</button>
           </div>
            <p className="text-stone-400">{formattedDate}</p><br />
            <p className="whitespace-pre-wrap">{project.description}</p>
        </header> 
        
        <Tasks onDelete={onDeleteTask} tasks={tasks} onAddTask={onAddTask}/>
    </section>
 )
            
    

}