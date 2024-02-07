import { Fragment } from "react"
import style from '../style/Button.module.css'

const Button = ({children}) =>{
    return(
        <button className={style.button}>{children}</button>
    )
}

export default Button