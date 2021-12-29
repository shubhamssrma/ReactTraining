// import logo from './logo.svg';
import './App.css';
import Mymodal from './Modal/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormInputGroup from './Modal/FormGroup';
// import ApiData from './ApiFetchData/ApiData';
function App() {
  const changeValue = (value) => {
    console.log(value)
  }
  return (
    <div>
      <Mymodal />
      {/* <FormInputGroup 
        labelname="Remarks"
        name="username"
        autoComplete="off"
        color="secondary"
        placeholder="Enter Remarks Here"
        callback={changeValue}
        disabled={false}
      /> */}
      {/* <ApiData /> */}
    </div>
  );
}

export default App;


