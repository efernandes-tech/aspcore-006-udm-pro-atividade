import React, { useState } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import Atividade from './components/Atividade';

let initialState = [
    {
        "id": 1,
        "prioridade": '1',
        "titulo": "Primeira atividade",
        "descricao": "Primeira atividade"
    },
    {
        "id": 2,
        "prioridade": '2',
        "titulo": "Segunda atividade",
        "descricao": "Segunda atividade"
    }
];

function App() {

    const [atividades, setAtividades] = useState(initialState);

    function adicionarAtividade(e) {
        e.preventDefault();

        const atividade = {
            "id": document.getElementById('id').value,
            "prioridade": document.getElementById('prioridade').value,
            "titulo": document.getElementById('titulo').value,
            "descricao": document.getElementById('descricao').value
        }

        setAtividades([...atividades, atividade]);
    }

    function deletarAtividade(id) {
        const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
        setAtividades([...atividadesFiltradas]);
    }

    return (
        <React.Fragment>
            <AtividadeForm
                atividades={atividades}
                adicionarAtividade={adicionarAtividade} />
            <div className="mt-3">
                {atividades.map(ativ => (
                    <Atividade key={ativ.id}
                        ativ={ativ}
                        deletarAtividade={deletarAtividade} />
                ))}
            </div>
        </React.Fragment>
    );
}

export default App;
