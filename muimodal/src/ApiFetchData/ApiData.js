import axios from 'axios'
import React from 'react'

class ApiData extends React.Component {
    state = {
        data : []
    }
    componentDidMount(){
        axios.get("http://localhost/db.php")
        .then(response => {
            this.setState({data : response.data})
            console.log(this.state.data)
        })
    }
    render(){
        return (
            <ul>
            {this.state.data.map((e,index) => <li key={index}>{e}</li>)}
            </ul>
        )
    }
}

export default ApiData
