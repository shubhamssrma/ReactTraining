import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import './FormInputCss.css'
export default function FormInputGroup(props) {
    const [inputValue, setInputValue] = useState('')
    const valueChange = (e) => {
        props.callback(e.target.value)
        setInputValue(e.target.value)
    }

    return (
        <div className="form-group">
            <InputLabel className="InputLabel"> <b style={{fontSize:"16px",color:"#000" }}>{props.labelname}</b> </InputLabel>
            <TextField 
                name={props.name} 
                autoComplete={props.autoComplete} 
                color={props.color} 
                defaultValue={props.defaultValue} 
                placeholder={props.placeholder} 
                onChange={valueChange}
                disabled={props.disabled} 
                value={inputValue}
            />
        </div>
    )
}