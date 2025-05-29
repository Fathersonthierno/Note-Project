import projectImage from '../assets/no-projects.png'
import Button from './button.jsx'
export default function NoProjectSelected({onSelect}){
    return (
        <>
        <section className='flex flex-col items-center justify-center gap-5 w-[75%]'>
            <img className='w-40' src={projectImage} alt="An empty project task list"/>
            <h1 className='text-2xl font-bold'>No Project Selected</h1>
            <p className='text-xl'>Select a project or get started a new one</p>
            <Button onClick={onSelect}>Create New Project</Button>
            
        </section>
        </>
    )
}