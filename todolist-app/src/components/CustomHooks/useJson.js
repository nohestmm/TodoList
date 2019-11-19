import { useState, useEffect } from 'react';
import PromiseJson from '../HOC/PromiseJson'
const useJson = () => {
   
    const [data, setData] = useState('')
    useEffect(() => {
        PromiseJson('http://my-json-server.typicode.com/nohestmm/json-db/todolist')
            .then(response => {
                setData(response)
            })
            .catch(error => {
                setData(error.message)
            })
    }, [])
  
   return data
  

}

export default useJson
