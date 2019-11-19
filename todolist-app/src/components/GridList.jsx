import React from 'react';
import './GridList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import IconStatus from './IconStatus'
import loading from '../images/loading.gif'

import useJson from './CustomHooks/useJson';

const GridList = () => {

    const list = useJson([])
   

    if ( list.error) {
        return (<p>{list.error}</p>)
    }
    else {
        return (

            <div>
                {
                    list.data.length === 0
                        ? <p><img src={loading} alt="loading" /></p>
                        :
                        list.data.map((el, index) =>
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