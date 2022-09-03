import React from 'react';
import './App.css';

function App() {

  const atividades = [
    {
      "id": 1,
      "descricao": "Primeira atividade"
    },
    {
      "id": 2,
      "descricao": "Segunda atividade"
    }
  ];

  function addAtividade(e) {
    e.preventDefault();
    const atividade = {
      "id": document.getElementById('id').value,
      "descricao": document.getElementById('descricao').value
    }
    atividades.push(atividade);
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
