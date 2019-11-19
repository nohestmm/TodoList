import { useState, useEffect } from 'react';
import PromiseJson from '../HOC/PromiseJson'
const useJson = () => {
    const [error, setError] = useState('')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        PromiseJson('http://my-json-server.typicode.com/nohestmm/json-db/todolist')
            .then(response => {
                setData(response)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                setError(error.message)
            })
    }, [])
  
   return {data, error, loading}
  

}

export default useJson
