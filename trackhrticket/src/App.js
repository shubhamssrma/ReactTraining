
// import axios from 'axios';
import React from 'react'
import Chat from './main/Chat';
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     value : "",
  //     idvalue : ""
  //   }
  //   this.setValues = this.setValues.bind(this)
  //   this.storeData = this.storeData.bind(this)
  //   this.setIdValue = this.setIdValue.bind(this)
  // }

  // setValues = (e) => {
  //   this.setState({value:e.target.value})
  //   console.log(this.state.value)
  // }
  // setIdValue = (e) => {
  //   this.setState({idvalue:e.target.value})
  // }

  // storeData = () => {
  //   var fd = new FormData();
  //   var Query = "INSERT INTO test_table3(file_id,file_name)VALUES('"+this.state.idvalue+"','"+this.state.value+"')";
  //   fd.append("Query",Query);
  //   axios({
  //     method : "POST",
  //     headers : {"Content-Type" : "multipart/form-data"},
  //     url : 'http://localhost/DBMSSQL/FetchRsDat.php',
  //     data : fd
  //   }).then(resp => console.log(resp));
  // }
  render(){
    return (
      <div>
        {/* <input type="number" value={this.state.idvalue} onChange={this.setIdValue}/>
        <input type="text" value={this.state.value} onChange={this.setValues} />
        <button onClick={this.storeData}>Submit</button> */}
        <Chat />
      </div>
    )
  }
}

export default App
