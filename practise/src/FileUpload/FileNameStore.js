
import axios from 'axios';
import React, {useState} from 'react';
// import {Progress} from '@material-ui/core'
import './filecss.css'

export default function FileNameStore(){
	const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();
		var fileName = selectedFile.name;
		console.log(fileName)
		var Query = "INSERT INTO test_table3(file_id,file_name)VALUES('8','"+fileName+"')"
		formData.append('Query', Query);

		axios({
			method:"POST",
			headers:{"Content-Type":"multipart/form-data"},
			url:'http://localhost/DBMSSQL/FetchRsDat.php',
			data:formData
		}).then(resp => console.log("file Uploading....",resp));

		setIsSelected(false);
		// setSelectedFile("");
	};

	return(
        <div>
			<input type="file" name="file" id="files" onChange={changeHandler} style={{display:"none"}}/>
			{isSelected ? <label htmlFor="files" id="fileLabel">{selectedFile.name}</label> : <label htmlFor="files" id="fileLabel">No File Choosen</label>}
			{isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={() => isSelected ? handleSubmission() : alert("choose file first")}>Submit</button>
			</div>
			{/* <Progress /> */}
		</div>
	)
}