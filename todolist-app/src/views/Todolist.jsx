import React from 'react';
import './Todolist.css';
import GridList from '../components/GridList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
const Todolist = () => {
    const today = new Date()
    return (
        <section className="content-main">
            <div className="content-titles">
                <span>Cosas por Hacer</span>
                <span>Hoy 
                    { ` ${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`} 
                    
                </span>
            </div>
            <div className="content-options">
                <button>Liberar Seleccionadas</button>
                <div>
                    <FontAwesomeIcon icon={faFilter} />
                    <span>Ordenar</span>
                    </div>

                {/* <select name="select" id="select">
                    <option value="lesstomore">Segun creación</option>
                    <option value="vencimiento">Segun vencimiento</option>
                    <option selected value="estado">Segun estado</option>
                </select> */}
            </div>
           <GridList/>
            </section>
            
        

    )
}
export default Todolist;