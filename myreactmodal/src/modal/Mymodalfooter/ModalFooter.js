import React from 'react'
import ModalFooterButton from './ModalFooterButton';
import axios from 'axios'
// let url = 'https://jsonplaceholder.typicode.com/users';
// const callAxios = () => {
//     axios.get(url)
//     .then(response =>)
// }
export default class MyModalFooter extends React.Component {
    callAxios(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {console.log(response.data)})
    }
    render() {
        return (
            <div className="mb-3">
                <div className="row">
                    <div className="col-md-6">
                        <ModalFooterButton class="btn btn-success" title="Previous" access={false} />
                    </div>
                    <div className="col-md-6" style={{textAlign:"right"}}>
                        <ModalFooterButton class="btn btn-success" title="Next" access={false} float="right" click={this.callAxios} />
                    </div>
                </div>
            </div>
        );
    }
}