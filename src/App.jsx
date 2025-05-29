import { useState } from "react";
import SideBar from "./components/sideBar";
import NewProject from "./components/newProject";
import NoProjectSelected from "./components/noProjectSelected"
import ProjectSelected from "./components/projectSelected";

function App() {
  const [projectState, setProjectState] = useState({
    selectProjectId: undefined,
    project: [],
    tasks: []
  } 
  );

  function handleAddTask(inputValue){
    setProjectState(prevState =>{
      const taskId = Math.random()
      const task ={
        value: inputValue,
        projectId: prevState.selectProjectId,
        id: taskId
      }
      return {
        ...prevState,
        tasks: [...prevState.tasks,task]
      }
    })

  }

  function handleDeleteTask(deleteTaskId){
    setProjectState(prevState =>{
      return{
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id != deleteTaskId)
      }
    })

  }

  function handleStartProject(){
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectProjectId: null
      }
    })
  }

  function handleAddProject(dataProject){
    setProjectState(prevState =>{
      const newProject ={
        ...dataProject,
        id: Math.random()
      }
      return {
        ...prevState,
        selectProjectId: undefined,
        project: [...prevState.project,newProject]
      }
    })
  }

  function handleSelectedProjet(id){
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectProjectId: id
      }
    })  
  }

  function handleDeleteProject(){
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectProjectId: undefined,
        project: prevState.project.filter(projectItem => projectItem.id !== prevState.selectProjectId)
      }
    })
    
  }



  function handleCancelProjet(){
    setProjectState(prevState =>{
      return{
        ...prevState,
        selectProjectId: undefined
      }
    })
  }

  
  

  console.log(projectState)

  const selectedProject = projectState.project.find(projectData => projectData.id === projectState.selectProjectId)


  let content = <ProjectSelected tasks={projectState.tasks} onDeleteTask={handleDeleteTask} onAddTask={handleAddTask} project={selectedProject} onDelete={handleDeleteProject}/>; 

  if(projectState.selectProjectId === undefined){
    content = <NoProjectSelected onSelect={handleStartProject}/>;
  } else if(projectState.selectProjectId === null){
    content = <NewProject onCancel={handleCancelProjet} onAdd={handleAddProject}/>;
  }
 
  return (
    <>
      <section className="flex flex-row">
        <SideBar 
        selectProject={handleSelectedProjet} 
        dataList={projectState.project} 
        onSelect={handleStartProject}
        selectProjectId={projectState.selectProjectId}/>
        {content}  
      </section> 
      
    </>
  );
}

export default App;
