import React, { useState } from 'react';
import './App.css';

let initialState = [
  {
    "id": 1,
    "descricao": "Primeira atividade"
  },
  {
    "id": 2,
    "descricao": "Segunda atividade"
  }
];

function App() {

  const [atividades, setAtividades] = useState(initialState);

  function addAtividade(e) {
    e.preventDefault();
    const atividade = {
      "id": document.getElementById('id').value,
      "descricao": document.getElementById('descricao').value
    }
    setAtividades([...atividades, atividade]);
  }

  return (
    <React.Fragment>
      <form>
        <input type="text" id='id' placeholder='id' />
        <input type="text" id='descricao' placeholder='descricao' />
        <button onClick={addAtividade}>+ Atividade</button>
      </form>
      <div className="mt-3">
        <ul className="list-group">
          {atividades.map(ativ => (
            <li className="list-group-item" key={ativ.id}>
              {ativ.id} - {ativ.descricao}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default App;
