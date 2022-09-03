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
      <form className='row g-3'>
        <div className="col-md-6">
          <label htmlFor="id" className="form-label">Id</label>
          <input id="id" type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="descricao" className="form-label">Descrição</label>
          <input id="descricao" type="text" className="form-control" />
        </div>
        <hr />
        <div class="col-12">
          <button className='btn btn-outline-primary' onClick={addAtividade}>
            + Atividade
          </button>
        </div>
      </form>
      <div className="mt-3">
        {atividades.map(ativ => (
          <li className="list-group-item" key={ativ.id}>
            {ativ.id} - {ativ.descricao}
          </li>
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
