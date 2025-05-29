import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./button";

export default function EmptyInputModal({ref}){
    const dialog = useRef();
    useImperativeHandle(ref, ()=>{
        return{

            openModal(){
                dialog.current.showModal()
            }
        }
        
    })
    return createPortal(<dialog className="backdrop:bg-stone-900/90 rounded-md shadow-md bg-slate-200 p-4" ref={dialog}>
        <h1 className="text-[1.5rem] text-center font-semibold">Please to fill the input form</h1>
        <form method="dialog" className="text-right mt-4">
            <Button>Close</Button>
        </form>
    </dialog>, document.getElementById('modal-root'))
}