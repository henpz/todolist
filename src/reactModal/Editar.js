import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Editartask ({modal, toggle, updateTask, taskObj}) {
    const [taskname, setTaskName] = useState('')
    const [description, setDescription] = useState('')
    
    const handleEdit = (e) =>{
        e.preventDefault()
        let tempObj = {}
        tempObj['Name'] = taskname
        tempObj['Description'] = description
        updateTask(tempObj)
    }
    const handleChange = (e) => {
        const {name, value} = e.target

          if(name ==="taskName"){
            setTaskName(value)
          }
          else{
            setDescription(value)
          }

          
    }

    useEffect(()=>{
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)


    },[])
    return(
    <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>EDITAR TAREFA</ModalHeader>
            <ModalBody>
            <form>
                <div className="form-group">
                    <label>Tarefa</label>
                    <input type="text"  className="form-control" value={taskname} onChange = {handleChange} name="taskName"/>
                </div>
                <div className="form-group">
                    <label>Descrição</label>
                    <textarea rows= "5" className="form-control" value={description} onChange = {handleChange} name="description"></textarea>
                </div>
            </form>
            </ModalBody>
            <ModalFooter>

            <Button color="primary" onClick={handleEdit}>Editar</Button>{' '}
    
            <Button color="secondary" onClick={toggle}>Fechar</Button>
                
            
            </ModalFooter>
      </Modal>
    )
}

export default Editartask