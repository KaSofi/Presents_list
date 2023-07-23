import { data } from './data';
import './App.css';
import { useState } from 'react';

function App() {
  const [present, setPresent] = useState(data);
  const deleteAllPresents = () => {
      setPresent( [] )
  }
  const removeItem = (id) => {
    let newPresent = present.filter(gifty => gifty.id !==id);
    console.log(newPresent)
    setPresent(newPresent)

  }

  return (
    <div className='container'>

      <div>
      <h1>List of <span>{present.length}</span> gifts</h1>
      </div>

      {present.map((item => {
        const {id, gift, image} = item;
        return(
          <div key={id}>
            <div>
              <h2>{id} - {gift}</h2>
            </div>
            <div>
              <img src={image} width={200} alt="gift" />
            </div>
            <div>
              <button onClick={ () => removeItem(id) }>delete item</button>
            </div>
          </div>
        )
      }))}

          <button onClick={() => deleteAllPresents() } className='buttonDeleteAll'>delete all</button>

    </div>
  );
}

export default App;
