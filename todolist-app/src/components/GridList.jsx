import React, { useState, useEffect } from 'react';
import './GridList.css';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import IconStatus from './IconStatus'
import loading from '../images/loading.gif'

const GridList = () => {

    const [data, setData] = useState([])

    useEffect( () => {
       axios.get('http://my-json-server.typicode.com/nohestmm/json-db/todolist')
            .then(response => setData(response.data))
    },[])


    return ( 
        
        <div>
            {
            data.length===0
            ? <p><img src={loading} alt="loading"/></p>
            :
                data.map((el, index) =>
                    <div key={index}>
                        <input type="checkbox" name={el.id} id={el.id} />
                        <span>${el.description}</span>
                        <input type="text" name="" id="" placeholder={el.date} />
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <IconStatus status={el.state} />
                    </div>

                )
            }
        </div>
    )

}


export default GridList