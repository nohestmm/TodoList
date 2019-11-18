import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const IconStatus = ({ status }) => {
    const [icon, setIcon] = useState('')
    useEffect(() => {
        if (status === "pendiente")
            setIcon(<FontAwesomeIcon icon={faClock} />)
        if (status === "atrasada")
            setIcon(<FontAwesomeIcon icon={faTimesCircle} />)
        if (status === "liberada")
            setIcon(<FontAwesomeIcon icon={faCheckCircle} />)
    },[])

    return (
        <span>
            {icon}
        </span>
    )
}

export default IconStatus