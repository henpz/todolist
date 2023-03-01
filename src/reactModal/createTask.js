import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Tarefas ({modal, toggle, save}) {
    const [taskname, setTaskName] = useState('')
    const [description, setDescription] = useState('')
    
    const handleSave = () => {
        let taskObj = {}
        taskObj ["Name"] = taskname
        taskObj["Description"] = description
        save(taskObj)
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
    return(
    <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>CRIAR TAREFAS</ModalHeader>
            <ModalBody>
            <form>
                <div className="form-group">
                    <label>Nome da Tarefa</label>
                    <input type="text"  className="form-control" value={taskname} onChange = {handleChange} name="taskName"/>
                </div>
                <div className="form-group">
                    <label>Descrição</label>
                    <textarea rows= "5" className="form-control" value={description} onChange = {handleChange} name="description"></textarea>
                </div>
            </form>
            </ModalBody>
            <ModalFooter>

            <Button color="primary" onClick={handleSave}>Criar</Button>{' '}
    
            <Button color="secondary" onClick={toggle}>Fechar</Button>
                
            
            </ModalFooter>
      </Modal>
    )
}

export default Tarefas