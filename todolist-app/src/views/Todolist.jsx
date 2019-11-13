import React from 'react';
import './Todolist.css'
const Todolist = () => {
    return (
        <section className="content-main">
            <div className="content-titles">
                <span>Cosas por Hacer</span>
                <span>Hoy</span>
            </div>
            <div className="content-options">
                <button>Liberar Seleccionadas</button>
                <select name="select" id="select">
                    <option value="lesstomore">Segun creación</option>
                    <option value="vencimiento">Segun vencimiento</option>
                    <option selected value="estado">Segun estado</option>
                </select>
            </div>
        </section>

    )
}
export default Todolist;