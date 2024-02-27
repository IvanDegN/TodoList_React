import { Fragment, useState } from "react"
import style from '../style/AddElement.module.css'
import Button from "./Button"


const AddElement = ({onClick, getAddInput, text, onKeyDown}) =>{

    
    return(
            <Fragment>
            <div className={style.flex}>
            <input type="text" value={text} onChange={getAddInput} onKeyDown={onKeyDown} />
            <Button onClick={onClick}>Добавить</Button>
            
    </div>
        </Fragment>
        
    )
}

export default AddElement