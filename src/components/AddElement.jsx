import { Fragment, useState } from "react"
import style from '../style/AddElement.module.css'
import Button from "./Button"
import data from '../data/data'

const AddElement = () =>{

    const [text, setText] = useState('');

    const getText = (event) => {
        console.log(event.target.value)
        setText(event.target.value)
    }

    const onClick = () =>{

    }

    return(
        
            <Fragment>
            <div className={style.flex}>
            <input type="text" value={text} onChange={getText} />

    
            <Button onClick={onClick}>Добавить</Button>
            
    </div>
        </Fragment>
        
    )
}

export default AddElement