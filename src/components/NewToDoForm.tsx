 import React, {useState} from "react";

 export const NewToDoForm : React.FC<{ addTodo : Function}> = (props ) => {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitToDo = () => {
        if ( description !== '' && assigned !== ''){
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    }

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input type='text' className='form-control' 
                        onChange={(event) =>{ setAssigned(event.target.value); }} 
                        value={assigned} required></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea className='form-control' rows={3} 
                            onChange={(event) =>{ setDescription(event.target.value)}} 
                            value={description} required></textarea>
                </div>
                <button type='button' className="btn btn-primary mt-3" onClick={submitToDo}>Add To Do</button>
            </form>
        </div>
    )
 }
