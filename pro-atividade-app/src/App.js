import './App.css';

function App() {

  const atividade = [
    {
      "id": 1,
      "descricao": "Primeira atividade"
    }
  ]

  return (
    <div className="mt-3">
      <ul className="list-group">
        <li className="list-group-item">{atividade[0].id} - {atividade[0].descricao}</li>
        <li className="list-group-item" onClick={() => console.log('JSX')}>Teste 2</li>
        <li className="list-group-item">Teste 3</li>
        <li className="list-group-item">Teste 4</li>
      </ul>
    </div>
  );
}

export default App;
