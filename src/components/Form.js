import { useState } from "react";
import Items from './Items';
import { v4 as uuidv4 } from 'uuid';


export default function Form() {

    const [myState, setMyStat] = useState([
        {task: 'Application avec react', id: uuidv4()},
        {task: 'Faire du Sport', id: uuidv4()},
        {task: 'Faire l\'amour', id: uuidv4()}
    ]);

    const [inputState, setInputState] = useState(
    
        )

    const addTask = e => {
        e.preventDefault();
        const newArr = [...myState];
        const newTodo = {}
        newTodo.task = inputState
        newTodo.id = uuidv4()
        newArr.push(newTodo)
        setMyStat(newArr)
        setInputState('')
    }

    const deleteTask = id => {
        const filteredData = myState.filter(item => {
          return item.id !== id
        })
    
        setMyStat(filteredData)
    }
    
    

    const linkedInput = (e) => {
        setInputState(e)
    }

    return (
        <div className="container">
            <form onSubmit={e => addTask(e)} className="row g-3">
                <div className="col-10 col-sm-8 col-lg-10">
                    <input type="text" onInput={e => linkedInput(e.target.value)} value={inputState} className="form-control" id="task" />
                </div>
                <div className="col-auto">
                    <button className="btn btn-success">Add</button>
                </div>
            </form><hr />
            <h2 className="text-muted">Tasks List</h2>
            <ul className="list-group">
                {myState.map(item => {
                    return (
                        <Items 
                        txt={item.task} 
                        key={item.id}
                        id={item.id} 
                        func={deleteTask}
                        />
                    )
                })}
            </ul>
        </div>
    )
}