import React, { useState } from "react";
import './Card.css'
import Editar from './editar.png'
import Delete from './delete.png'
import Editartask from "../reactModal/Editar";
import Check from './check.png'
import Concluido from './setCheck.png'

function Card ({taskObj, index, deletarTarefa, updateListArray}) {
    const [modal, setModal] =useState(false)
    const [check, setCheck] = useState (taskObj.completed || false)
    const colors = [
        {
        primaryColor: "#5D93E1",
        secondaryColor: "#ECF3FC"
        },
    
        {
        primaryColor: "#F9D288",
        secondaryColor: "#FEFAF1"
        },

        {
        primaryColor: "#5DC250",
        secondaryColor: "#F2FAL1"
        },
        
        {
        primaryColor: "#F48687",
        secondaryColor: "#FDF1F1"
        },
        {
        primaryColor: "#B964F7",
        secondaryColor: "#F3F0FD"
        },
]
        const toggle = () => {
            setModal(!modal)
        }

        const updateTask = (obj) => {
            updateListArray(obj, index)
        }
        const handleDelete = ()=> {
            deletarTarefa(index)
        }

        const handleComplete = () => {
            setCheck(!check);
          };

        const taskName = taskObj.Name
        const truncatedTaskName = taskName.length > 29 ? taskName.substring(0, 29) : taskName
    return(

        <div className="card-wrapper mr-5">
           
            <div className="card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div className="task-holder">
                <span  style={{"background-color": colors[index%5].primaryColor}}className="card-header">{truncatedTaskName}</span>
                <p>{taskObj.Description.substring(0, 100)}</p>

                <div className="lastdiv">
                    <i className="check"onClick={handleComplete}>{check ?  (<img id="concluido"src={Concluido}/>) : (<img id="check"src={Check}/>)}</i>
                    <i className="edit" onClick={()=> setModal(true)}><img id="edit"src={Editar}></img></i>
                    <i className="delete" onClick={handleDelete}><img id="delet"src={Delete}></img></i>
                </div>
                <Editartask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
            </div>
        </div>
    )
}

export default Card