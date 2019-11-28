import React from 'react';
import './Todolist.css';
import GridList from '../components/GridList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import ButtonAdd from '../components/ButtonAdd'
const Todolist = () => {
    const today = new Date()
    return (
        <section className="content-main">
            <div  className="content-header">
            <div className="content-titles">
                <p>Cosas por Hacer</p>
                <button>Liberar Seleccionadas</button>
            </div>
            <div  className="content-titles">
                <p>Hoy
                    {` 
                    ${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}
                    `}

                </p>
                <div>
                    <FontAwesomeIcon icon={faFilter} />
                    <span>Ordenar</span>
                </div>
            </div>
</div>
            <GridList />
            <ButtonAdd />
        </section>



    )
}
export default Todolist;