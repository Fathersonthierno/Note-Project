import { useRef } from "react";
import Input from "./input";
import EmptyInputModal from "./emptyInputModal";
export default function NewProject({onAdd, onCancel}){

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    const modal = useRef();

    function handleSaveInfo(){
       const enteredTitle = titleRef.current.value; 
       const enteredDescriptionRef = descriptionRef.current.value; 
       const enteredDueDateRef = dueDateRef.current.value;

       if(enteredTitle.trim() === '' || enteredDescriptionRef.trim() === ''
        || enteredDueDateRef.trim() === ''){
            modal.current.openModal();
        }
        else {
            onAdd({
        title: enteredTitle,
        description: enteredDescriptionRef,
        dueDate: enteredDueDateRef,
        })

        }

    }
    
    return (
        <>
        <EmptyInputModal ref={modal}/>
        <section className=" flex flex-col justify-center w-[70%] ">
         <div className="flex flex-row justify-end gap-3 text-center">
            <p>
             <button onClick={onCancel} className="text-sky-800 hover:text-sky-900 text-center text-xl p-2">Cancel</button>
            </p>
            <button onClick={handleSaveInfo} className="bg-sky-800 hover:bg-sky-900 rounded-lg text-center text-xl text-stone-50 w-24 p-2">Save</button>
         </div>
         <Input ref={titleRef} label="Title" type="text"/>
         <Input ref={descriptionRef} label="Description" textarea/>
         <Input ref={dueDateRef} label="Due Date" type="date"/>
        
        </section>
        
       
        </>
    )
}