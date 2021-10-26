import axios from 'axios';
import React,{useState} from 'react'
import './filecss.css'


export default function ConvertByteArray() {
    const [selectedFile, setSelectedFile] = useState([]);
    const [byteArrayString, setByteArrayString] = useState("")
    const [showImg, setShowImg] = useState(false)
    const [showDoc, setShowDoc] = useState(false)

    const storeFile = (e) => {
        // {/* Storing File type to a variable for further use */}
        const fileType = e.target.files[0].type;
        console.log("checking file type"+fileType)
        // {/* Storing File type to a variable for further use */}

            // {/* Convert File to byteArray */}
        var reader = new FileReader();
        var fileByteArray = [];
        reader.readAsArrayBuffer(e.target.files[0]);
        reader.onloadend = function (evt) {
            if (evt.target.readyState === FileReader.DONE) {
            var arrayBuffer = evt.target.result,
            array = new Uint8Array(arrayBuffer);
                for (var i = 0; i < array.length; i++) {
                    fileByteArray.push(array[i]);
                }
                console.log(fileByteArray);
                console.log("success");
                setByteArrayString(fileByteArray);
            }
            // {/* Convert File to byteArray */}

            // {/* Convert ArrayBuffer to base64 string */}
            function _arrayBufferToBase64( buffer ) {
                var binary = '';
                var bytes = new Uint8Array( buffer );
                var len = bytes.byteLength;
                for (var i = 0; i < len; i++) {
                    binary += String.fromCharCode( bytes[ i ] );
                }
                return window.btoa( binary );                
            }
            
            const base64 = _arrayBufferToBase64(fileByteArray);
            // {/* Convert ArrayBuffer to base64 string */}

            // {/* Download base64 file */}
            let fetchDataModified = `data:${fileType};base64,${base64}`;
            let a = document.createElement("a");
            a.href = fetchDataModified;
            var extension = "";
            switch(fileType){
                case "application/x-zip-compressed" : extension = "zip";break;
                case "text/plain" : extension = "txt";break;
                case "application/msword" : extension = "doc";break;
                case "application/vnd.ms-excel" : extension = "xls";break;
                case "application/vnd.ms-powerpoint" : extension = "ppt";break;
                // case "image/png": extension = "png";break;
                // case  "image/jpg" : extension = "jpg";break;
                // case "application/pdf" : extension = "pdf";setShowDov(true);break;
                default : const ext = fileType.split('/');
                        extension = ext[1];
                        if(ext[0] === "image"){
                            setShowImg(true);
                            setShowDoc(false);
                        }else{
                            setShowImg(false);
                            setShowDoc(true);
                        }
                        break;
            }
            document.getElementById("downloadBtn").removeAttribute('href');
            document.getElementById("downloadBtn").setAttribute('href',`${fetchDataModified}`);
            document.getElementById("downloadBtn").setAttribute('download',`doc.${extension}`);
            // {/* Download base64 file */}
            
            setSelectedFile(base64);
        }
    }

    const uploadFile = (e) => {
        e.preventDefault();
        var fd = new FormData();
        // MSSQL DATABASE CONNECTION
        var Query = "INSERT INTO byteArrayTable(file_id,file_name)VALUES('3','"+[byteArrayString]+"')";
        fd.append("Query",Query);
        axios({
            method:"POST",
            headers : {"Content-Type":"multipart/form-data"},
            url:"http://localhost/DBMSSQL/FetchRsDat.php",
            data : fd
        }).then(resp => console.log(resp))
        .catch(err => console.error(err))
    }
    return (
        <div id="form-group">
            <input type="file" className="form-control" onChange={storeFile}/>
            <br /><button className="btn btn-info" onClick={uploadFile}>Upload</button>
            <a href="/#" id="downloadBtn" style={{textDecoration:"none",backgroundColor:"#f1f1f1",padding:"10px",borderRadius:"10px",cursor:"pointer"}}>Download file</a>
            <br />
            {showImg ? <img src={"data:image/jpeg;base64,"+selectedFile} alt="byteArrayImage" /> : "" }
            {showDoc ? <embed src={"data:application/pdf;base64,"+selectedFile} width="800px" height="2100px" /> : "" }
            
        </div>
    )
}