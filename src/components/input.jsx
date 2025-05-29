import { forwardRef } from "react";

 const Input = forwardRef(function Input({label, textarea, ...props}, ref){

    const labelStyle = "block mb-2 font-titleLabel text-xl font-semibold uppercase";
    const inputStyle = "w-full bg-slate-button mb-6 p-5"
    return ( 
    <div className="ml-[5%]">
        <label className={labelStyle}>{label}</label>
        {textarea ? <textarea ref={ref} className={inputStyle} {...props}></textarea> : 
        <input ref={ref} className={inputStyle} {...props}/>}  
    </div>)
        
})

export default Input;