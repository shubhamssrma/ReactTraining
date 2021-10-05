import React from 'react'
// import ModalFooterButton from './ModalFooterButton';
// import axios from 'axios'
// let url = 'https://jsonplaceholder.typicode.com/users';
// const callAxios = () => {
//     axios.get(url)
//     .then(response =>)
// }
export default class MyModalFooter extends React.Component {
    // callAxios(){
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(response => {console.log(response.data)})
    // }
    render() {
        return (
            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <button className="btn btn-success" style={{width:"100px"}}>previous</button>
                        {/* <ModalFooterButton class="btn btn-success" title="Previous" access={false} /> */}
                    </div>
                    <div className="col" style={{textAlign:"right"}}>
                        <button type="button" className="btn btn-success" style={{width:"100px"}}>Next</button>
                        {/* <ModalFooterButton class="btn btn-success" title="Next" access={false} float="right" click={this.callAxios} /> */}
                    </div>
                </div>
            </div>
        );
    }
}