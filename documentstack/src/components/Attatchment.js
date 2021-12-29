import React,{useState,useEffect} from 'react'
import './Attatchment.css'
import axios from 'axios'
import pdf from '../icons/pdf.png'
import image from '../icons/image.png'
import docs from '../icons/docs.png'
import ppt from '../icons/ppt.png'
import sheets from '../icons/sheets.png'
import zip from '../icons/zip.png'
import text from '../icons/text.png'

const you = {
    backgrounColor:"skyblue",
    borderBottomLeftRadius : "0px",
}
export default function Attatchment(props) {
    const [base64, setBase64] = useState('')
    const [fileIcon, setFileIcon] = useState()
    
    useEffect(() => {
        var fd = new FormData();
        let queryString = `SLCI_Web_Proc_User_GetAttachment @UserID ='${props.userid}',@AttachmentID='${props.attID}'`
        fd.append("Query", queryString);
        axios({
          mode:'cors',
          method: "POST",
          headers: { "Content-Type": "multipart/form-data" },
          url: props.apipath,
          data: fd
        }).then(resp => {
            // console.log("download data : ",resp.data)
            var base64Type= ""
            var fileIcon = ''
            var extension = resp.data[''][0]['Extension'];
            switch(extension){
                case ".zip" : base64Type = "application/x-zip-compressed"; fileIcon = zip;break;
                case ".txt" : base64Type = "text/plain"; fileIcon = text;break;
                case ".doc" : base64Type = "application/msword"; fileIcon = docs;break;
                case ".xls" : base64Type = "application/vnd.ms-excel"; fileIcon = sheets;break;
                case ".ppt" : base64Type = "application/vnd.ms-powerpoint"; fileIcon = ppt;break;
                case ".png": base64Type = "image/png"; fileIcon = image;break;
                case  ".jpg" : base64Type = "image/jpg"; fileIcon = image;break;
                case ".pdf" : base64Type = "application/pdf"; fileIcon = pdf;break;
                case ".jpeg" : base64Type = "image/jpeg"; fileIcon = image;break;
                default :  break;
            }
            setBase64(`data:${base64Type};base64,${resp.data[''][0].Attachment}`)
            setFileIcon(fileIcon)
        })
    }, [])

    const downloadFile = (e) => {
        e.preventDefault();
        var hiddenElement = document.createElement('a');
        hiddenElement.href = base64;
        hiddenElement.target = '_blank';
        hiddenElement.download = `${props.fileName}`;
        hiddenElement.click();
    }
    return (
        <>
        <div id="attatchmentBox" onClick={downloadFile}>
            <div id="fileExt">
                <h1>{props.fileExt.split('.')[1]}</h1>
            </div>
            <div id="fileName">
                <i id="fileIcon"><img src={fileIcon}/></i>
                <p style={{color:"#8c8c8c"}}>{props.fileName}</p>
            </div>
        </div>
        </>
    )
}
