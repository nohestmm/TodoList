import { createStore } from "redux"
const initialStore = {
    item: []
}

const rootReducer = (state = initialStore, action) =>{
return state
}

export default createStore(rootReducer)