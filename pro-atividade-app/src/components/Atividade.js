import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * props:
 *  - ativ
 *  - deletarAtividade
 */
export default function Atividade(props) {

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
        <div className={"card mb-2 shadow-sm border-" + prioridadeStyle(props.ativ.prioridade)}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">
                        <span className='badge bg-primary me-2'>
                            {props.ativ.id}
                        </span>
                        -
                        {props.ativ.titulo}
                    </h5>
                    <h6>
                        Prioridade:
                        <span className={'ms-1 text-' + prioridadeStyle(props.ativ.prioridade)}>
                            <FontAwesomeIcon icon={"fa-regular fa-face-" + prioridadeStyle(props.ativ.prioridade, true)} className='me-1' />
                            {prioridadeLabel(props.ativ.prioridade)}
                        </span>
                    </h6>
                </div>
                <p className="card-text">
                    {props.ativ.descricao}
                </p>
                <div className="d-flex justify-content-end pt-2 m-0 border-top">
                    <button className="btn btn-outline-primary btn-sm me-2">
                        <FontAwesomeIcon icon="fa-solid fa-pen" className='me-1' />
                        Editar
                    </button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => props.deletarAtividade(props.ativ.id)}>
                        <FontAwesomeIcon icon="fa-solid fa-trash" className='me-1' />
                        Deletar
                    </button>
                </div>
            </div>
        </div>
    )
}
