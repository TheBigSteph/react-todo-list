import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import Form from './components/Form';
import Items from './components/Items';

function App() {
  const [myState, setMyStat] = useState([
    {task: 'Application avec react'},
    {task: 'Faire du Sport'},
    {task: 'Faire l\'amour'}
  ])

  return (
    <div className="App">
      <div className="mx-auto px-4 col-12 col-sm-10 col-lg-6">
        <h1 className="text-center p-3">Todo List</h1>
        <Form />
        {myState.map((item, index) => {
          return <Items txt={item.task} />
        })}
        
      </div>
      
    </div>
  );
}

export default App;
