import React from 'react';
import './GridList.css';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import IconStatus from './IconStatus'

class GridList extends React.Component{
constructor(props){
super(props)

this.state = {
todolist: []
}
}
componentDidMount() {
axios.get('http://my-json-server.typicode.com/nohestmm/json-db/todolist')
.then(response =>
    this.setState({
        todolist: response.data
    }))
}
render(){
    const { todolist } =  this.state
    return(
        <div>
            {
                todolist.map((el, index) =>
                  
                    <div key={index}>  
                        <input type="checkbox" name={el.id} id={el.id}/>
                       <span>${el.description}</span> 
                       <input type="text" name="" id="" placeholder= {el.date}/>
                       <FontAwesomeIcon icon={faCalendarAlt} />
                       <IconStatus status={el.state}  />
                    </div>
                    
                )
            }
        </div>
    )

}
}

export default GridList