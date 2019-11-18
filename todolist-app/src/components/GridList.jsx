import React, { useState, useEffect } from 'react';
import './GridList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import IconStatus from './IconStatus'
import loading from '../images/loading.gif'
import PromiseJson from './HOC/PromiseJson';

const GridList = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        PromiseJson('http://my-json-server.typicode.com/nohestmm/json-db/todolist')
            .then(response => {
                setData(response)
            })
            .catch(error => {
                setError(error.message)
            })
    }, [])

    if (error) {
        return (<p>{error}</p>)
    }
    else {
        return (

            <div>
                {
                    data.length === 0
                        ? <p><img src={loading} alt="loading" /></p>
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
}


export default GridList