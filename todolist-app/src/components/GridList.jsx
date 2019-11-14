import React from 'react';
import './GridList.css';
import axios from 'axios'

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
                todolist.map(el =>
                    
                    <div>
                        ${el.description}
                    </div>
                )
            }
        </div>
    )

}
}

export default GridList