import axios from 'axios'

const PromiseJson = (url) =>{
return new Promise ((resolve, reject)=>{
axios.get(url)
.then(res=>{
    resolve(res.data)
})
.catch(error=> reject(error))
})
}

export default PromiseJson