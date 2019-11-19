import { useState, useEffect } from 'react';
import PromiseJson from '../HOC/PromiseJson'
const useJson = () => {
    const [error, setError] = useState('')
    const [data, setData] = useState([])
    useEffect(() => {
        PromiseJson('http://my-json-server.typicode.com/nohestmm/json-db/todlist')
            .then(response => {
                setData(response)
            })
            .catch(error => {
                setError(error.message)
            })
    }, [])
  
   return {data, error}
  

}

export default useJson
