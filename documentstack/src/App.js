import React, { Component } from 'react'
import Attatchment from './components/Attatchment'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/customStyle.css'
import axios from 'axios'
import { StringFormatter } from './components/StringFormatter'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      // fetchRsUrl : 'http://slci-hrsolutions.com/fetchrsdata.php',
      fetchRsUrl : `${sessionStorage.getItem('Apipathurl')}fetchrsdata.php`,
      docsList : [],
      fileName : '',
      fileExtension : ''
    }
    this.storeFile = this.storeFile.bind(this)
  }

  storeFile(e){
    e.preventDefault()
    if(e.target.files != "" && e.target.files != 'undefiled'){
      const fileType = e.target.files[0].type;
      var fileName = e.target.files[0].name.split('.')[0];
      var fileSize = e.target.files[0].size;
      // alert("fileSize : ",fileSize)
      var convertedFileSize = "";
      if(fileSize/1024 >= 1024){
        fileSize =  ((fileSize/1024)/1024)+"";
        fileSize = fileSize.split('.');
        convertedFileSize = fileSize[0]+"MB";
        // console.log("fileSize in MB : ", convertedFileSize);
      }else{
        fileSize =  (fileSize/1024)+"";
        fileSize = fileSize.split('.');
        convertedFileSize = fileSize[0]+"KB";
        // console.log("fileSize in KB : ", convertedFileSize);
      }
      // console.log("file size is : "+convertedFileSize,"filename is : "+fileName,"fileArray : "+ e.target.files[0]);
      
      // console.log("checking file type : "+fileType)
      
      // console.log("file checking array : ",e.target.files)
      var extension = "";
      switch(fileType){
        case "application/x-zip-compressed" : extension = "zip";break;
        case "text/plain" : extension = "txt";break;
        case "application/msword" : extension = "doc";break;
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document" : extension = "doc";break;
        case "application/vnd.ms-excel" : extension = "xls";break;
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" : extension = "xls";break;
        case "application/vnd.ms-powerpoint" : extension = "ppt";break;
        case "application/vnd.openxmlformats-officedocument.presentationml.presentation" : extension = "ppt";break;
        case "image/png": extension = "png";break;
        case  "image/jpg" : extension = "jpg";break;
        case  "image/jpeg" : extension = "jpeg";break;
        case "application/pdf" : extension = "pdf";break;
        default : break;
      }
  
      if(extension){
        let fileArray = e.target.files[0]
        var fd = new FormData();
        // console.log("file array is : ",fileArray)
    
        let fName = fileName+'.'+extension
        this.setState({fileName : fName,fileExtension : extension})
        let queryString = "SLCI_Web_Proc_User_Document_Submit @UserID ='{0}',@EmpID='{1}',@Attachment=$%$File$%$,@Extension='{2}',@Description ='{3}',@FileName = '{4}'";
        let queryArr = [];
        queryArr.push('1','1','.'+extension,fName,fName)
        let formattedString = StringFormatter(queryString,queryArr);
        let Query = formattedString;
    
        fd.append("Query",Query);
        fd.append("file",fileArray);
        axios({
          mode:'cors',
          method: 'post',
          headers: { 'Content-Type': 'multipart/form-data' },
          url: this.state.fetchRsUrl,
          data: fd
        }).then(resp => {
            // console.log('file Response',resp)
            var fd = new FormData();
            let queryString = `SLCI_Web_Proc_User_Document_GetList @UserID='{0}', @EmpID='{1}'`
            let queryArr = [];
            queryArr.push('1','1')
            let formattedString = StringFormatter(queryString,queryArr);
            let Query = formattedString;
            fd.append("Query", Query);
            axios({
              mode:'cors',
              method: "POST",
              headers: { "Content-Type": "multipart/form-data" },
              url: this.state.fetchRsUrl,
              data: fd
            }).then(resp => {
              // console.log(resp.data)
              this.setState({docsList : resp.data['']})
              window.onload = setTimeout("window.top.location.reload(true)");
            })
          }
        )
        .catch(err => console.error(err))
      }
    }
  }
  componentDidMount(){
    console.log(this.state.fetchRsUrl)
    var fd = new FormData();
    let queryString = `SLCI_Web_Proc_User_Document_GetList @UserID='{0}', @EmpID='{1}'`
    let queryArr = [];
    queryArr.push('1','1')
    let formattedString = StringFormatter(queryString,queryArr);
    let Query = formattedString;
    fd.append("Query", Query);
    axios({
      mode:'cors',
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      url: this.state.fetchRsUrl,
      data: fd
    }).then(resp => {
      // console.log(resp.data)
      this.setState({docsList : resp.data['']})
    })
  }
  render() {
    return (
      <div className="container-fluid" id="docsDiv">
        <nav className="navbar navbar-light bg-light">
          <form className="container-fluid justify-content-end">
            <input type="file" name="file" id="upload" hidden  onChange={(e) => this.storeFile(e)}/>
            <label htmlFor="upload">
              <span className="btn btn-outline-success me-2" style={{fontSize:"16px"}}>Upload</span>
            </label>
          </form>
        </nav>
        <div className="row">
          {
            this.state.docsList.map((s,index) => {
              var fileExtension = s.Description.split(".")[1]
              return(
                <div className="col-md-3 col-sm-6" key={index}>
                  <Attatchment apipath={this.state.fetchRsUrl} attID={s.AttachmentID} userid={s.EmpID} fileExt={'.'+fileExtension} fileName={s.Description}/> 
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
