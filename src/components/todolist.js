import React, { useEffect, useState } from "react";
import './todolist.css'
import Tarefas from '../reactModal/createTask'
import Card from "./Card";


function TodoList () {
    const [modal, setModal] = useState(false)
    const [taskList, setTaskList] = useState([])


    useEffect(()=> {
        let arr = localStorage.getItem("taskList")
        
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    const deletarTarefa = (index) =>{
        let tempList = taskList
        tempList.splice(index, 1)
        setTaskList(tempList)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        window.location.reload()
    }
    
    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal)
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setModal(false)
        setTaskList(tempList)
    }
    
    return(
    <>
   
        <div className="header">
            <h3>Lista de Tarefas</h3>
            <span className="btCriar" onClick={()=> setModal(true)}>Criar Tarefa</span>
        </div>
        <div className="task-container">
            {taskList && taskList.map((obj, index) => <Card taskObj={obj} 
            index = {index} deletarTarefa = {deletarTarefa} updateListArray = {updateListArray}/>)}
        </div>
        <Tarefas toggle = {toggle} modal = {modal} save = {saveTask} />
    </>
    )
}

export default TodoList