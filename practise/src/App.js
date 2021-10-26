import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
// import { faCoffee } from '@fortawesome/fontawesome-free'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Sidebar from './navbar/navbar';
import ConvertByteArray from './FileUpload/ConvertByteArray';
import FileNameStore from './FileUpload/FileNameStore';

function App() {
  return (
    <div className="container-fluid">
      <div className="col-md-6">
        {/* <FileNameStore/> */}
      </div>
      <div className="col-md-6">
        <ConvertByteArray/>
      </div>
      {/* <Sidebar/> */}
    </div>
  );
}

export default App;
