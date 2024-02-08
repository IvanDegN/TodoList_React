import { Fragment } from "react"
import style from '../style/Button.module.css'

const Button = ({children, onClick}) =>{
    return(
        <button onClick={onClick} className={style.button}>{children}</button>
    )
}

export default Button