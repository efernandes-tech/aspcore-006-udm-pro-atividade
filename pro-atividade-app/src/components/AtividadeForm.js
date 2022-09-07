import React, { useState, useEffect } from 'react'

/**
 * props:
 * - atividades
 * - atividadeSelecionada
 * - adicionarAtividade
 */
export default function AtividadeForm(props) {

    const [atividade, setAtividade] = useState({});
    const [mensagem, setMensagem] = useState({});

    useEffect(() => {
        console.log('useEffect')
    }, [mensagem]);

    const inputTextHandler = (e) => {
        const { name, value } = e.target;

        setAtividade({ ...atividade, [name]: value });
    }

    return (
        <form className='row g-3'>
            <div className="col-md-6">
                <label className="form-label">Título</label>
                <input id="titulo" name="titulo" type="text" className="form-control"
                    value={atividade.titulo}
                    onChange={inputTextHandler}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Propriedade</label>
                <select id="prioridade" name="prioridade" className="form-select"
                    value={atividade.prioridade}
                    onChange={inputTextHandler}
                >
                    <option defaultValue={0}>Selecione</option>
                    <option value="1">Baixa</option>
                    <option value="2">Normal</option>
                    <option value="3">Alta</option>
                </select>
            </div>
            <div className="col-md-12">
                <label className="form-label">Descrição</label>
                <textarea id="descricao" name="descricao" type="text" className="form-control"
                    value={atividade.descricao}
                    onChange={inputTextHandler}
                ></textarea>
            </div>
            <hr />
            <div className="col-12">
                <button className='btn btn-outline-primary' onClick={props.adicionarAtividade}>
                    + Atividade
                </button>
            </div>
        </form>
    )
}
