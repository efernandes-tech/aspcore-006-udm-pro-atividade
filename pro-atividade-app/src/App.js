import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

    function addAtividade(e) {
        e.preventDefault();

        const atividade = {
            "id": document.getElementById('id').value,
            "prioridade": document.getElementById('prioridade').value,
            "titulo": document.getElementById('titulo').value,
            "descricao": document.getElementById('descricao').value
        }

        setAtividades([...atividades, atividade]);
    }

    function prioridadeLabel(param) {
        switch (param) {
            case '1':
                return 'Baixa';
            case '2':
                return 'Normal';
            case '3':
                return 'Alta';
            default:
                return 'Não definida';
        }
    }

    function prioridadeStyle(param, icon) {
        switch (param) {
            case '1':
                return icon ? 'smile' : 'success';
            case '2':
                return icon ? 'meh' : 'dark';
            case '3':
                return icon ? 'frown' : 'warning';
            default:
                return '';
        }
    }

    return (
        <React.Fragment>
            <form className='row g-3'>
                <div className="col-md-6">
                    <label className="form-label">Id</label>
                    <input id="id" type="text" className="form-control" readOnly
                        value={
                            Math.max.apply(
                                Math,
                                atividades.map(item => item.id)
                            ) + 1
                        }
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Propriedade</label>
                    <select id="prioridade" className="form-select">
                        <option defaultValue={0}>Selecione</option>
                        <option value="1">Baixa</option>
                        <option value="2">Normal</option>
                        <option value="3">Alta</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Título</label>
                    <input id="titulo" type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Descrição</label>
                    <input id="descricao" type="text" className="form-control" />
                </div>
                <hr />
                <div className="col-12">
                    <button className='btn btn-outline-primary' onClick={addAtividade}>
                        + Atividade
                    </button>
                </div>
            </form>
            <div className="mt-3">
                {atividades.map(ativ => (
                    <div key={ativ.id} className={"card mb-2 shadow-sm border-" + prioridadeStyle(ativ.prioridade)}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">
                                    <span className='badge bg-primary me-2'>
                                        {ativ.id}
                                    </span>
                                    -
                                    {ativ.titulo}
                                </h5>
                                <h6>
                                    Prioridade:
                                    <span className={'ms-1 text-' + prioridadeStyle(ativ.prioridade)}>
                                        <FontAwesomeIcon icon={"fa-regular fa-face-" + prioridadeStyle(ativ.prioridade, true)} className='me-1' />
                                        {prioridadeLabel(ativ.prioridade)}
                                    </span>
                                </h6>
                            </div>
                            <p className="card-text">
                                {ativ.descricao}
                            </p>
                            <div className="d-flex justify-content-end pt-2 m-0 border-top">
                                <button className="btn btn-outline-primary btn-sm me-2">
                                    <FontAwesomeIcon icon="fa-solid fa-pen" className='me-1' />
                                    Editar
                                </button>
                                <button className="btn btn-outline-danger btn-sm">
                                    <FontAwesomeIcon icon="fa-solid fa-trash" className='me-1' />
                                    Deletar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
}

export default App;
