import { useState } from "react";
import Button from "./button.jsx";

export default function SideBar({onSelect, 
    dataList, 
    selectProject,
    selectProjectId
}){
    
    return (
        <section className="flex flex-col px-6 py-12 gap-4 items-start bg-fuchsia-900 mt-10 h-screen xl:w-[25%] rounded-r-xl">
            <h1 className=" text-left text-stone-50 text-stone font-bold uppercase text-2xl">Your projects</h1>
            <Button onClick={onSelect}>+ Add Project</Button>
            <ul className="w-full">
                {dataList.map(projectData => {

                    let highlightCssClasses = "w-full text-left my-1 px-2 py-1 font-semibold first-letter:uppercase rounded-sm hover:text-stone-100 hover:bg-fuchsia-950";

                    if(projectData.id === selectProjectId){
                        highlightCssClasses += " bg-fuchsia-950 text-stone-300"
                    }else {
                        highlightCssClasses += " text-stone-200"
                    }
                    return <li key={projectData.id}>
                        <button onClick={() => selectProject(projectData.id)} className={highlightCssClasses}>
                            {projectData.title}    
                        </button>
                    </li>
                })}
            </ul>
        </section>
    )
}