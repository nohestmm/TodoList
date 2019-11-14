import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const IconStatus = ({status})=>{
    let icon
if(status === "pendiente")
icon =  <FontAwesomeIcon icon={faClock} />
if(status === "atrasada")
icon =  <FontAwesomeIcon icon={faTimesCircle} />
if(status === "liberada")
icon =  <FontAwesomeIcon icon={faCheckCircle} />
return(
   <span> 
 {icon}   
    </span> 
)
}

export default IconStatus