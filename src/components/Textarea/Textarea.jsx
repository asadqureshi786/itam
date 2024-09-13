import { useState } from 'react';
import {Input} from 'reactstrap';

export default function TextArea({name,placeholder,id,value,height}){

    const [textvalue,setTextValue] = useState(value)

    return(
        <>
            <Input type="textarea" name={name ? name : ''} placeholder={placeholder ? placeholder : ''} rows={height ? height : "6"} onChange={(event)=> setTextValue(event.target.value)} value={textvalue ? textvalue : ''} className='form-control' id={id ? id : ''}/>
        </>
    )
}