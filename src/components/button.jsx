
export default function Button({children, ...props}){
    return <button className="bg-sky-800 hover:bg-sky-900 px-4 py-2 font-semibold 
            text-[1rem] text-stone-300 rounded-md shadow-purple-50"{...props}>{children}</button>
}