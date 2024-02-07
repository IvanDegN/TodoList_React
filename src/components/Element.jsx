import { Fragment } from "react"
import Button from "./Button"
import style from '../style/Element.module.css'

// TODO: ПРОКИНУТЬ ЧЕРЕЗ ПРОПС ЗНАЧЕНИЕ ТЕКСТВОГО ПОЛЯ В VALUE

const Element = ({text}) =>{

    
    return(
        
        <Fragment>
            <div className={style.flex}>
            <input type="text"  value={text} />
            
    
            <Button>Удалить</Button>
            <Button>Редактировать</Button>
            <Button>Сохранить</Button>
    </div>
        </Fragment>
    )
}

export default Element