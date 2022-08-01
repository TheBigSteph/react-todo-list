import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import Form from './components/Form';
import Items from './components/Items';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [myState, setMyStat] = useState([
    {task: 'Application avec react', id: uuidv4()},
    {task: 'Faire du Sport', id: uuidv4()},
    {task: 'Faire l\'amour', id: uuidv4()}
  ]);

  const deleteTask = id => {
    console.log(id)
    const filteredData = myState.filter(item => {
      return item.id !== id
    })

    setMyStat(filteredData)
  }

  return (
    <div className="App">
      <div className="mx-auto px-4 col-12 col-sm-10 col-lg-6">
        <h1 className="text-center p-3">Todo List</h1>
        <Form />
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
        
      </div>
      
    </div>
  );
}

export default App;
