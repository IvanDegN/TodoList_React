import { Fragment, useState } from "react"
import style from '../style/AddElement.module.css'
import Button from "./Button"


const AddElement = ({onClick, getAddInput, text}) =>{

    
    return(
            <Fragment>
            <div className={style.flex}>
            <input type="text" value={text} onChange={getAddInput} />
            <Button onClick={onClick}>Добавить</Button>
            
    </div>
        </Fragment>
        
    )
}

export default AddElement