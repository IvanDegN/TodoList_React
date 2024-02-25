import { Fragment, useState } from "react"
import style from '../style/MainContent.module.css'
import Element from "./Element"
import AddElement from "./AddElement"
import data from '../data/data'


const MainContent = () =>{
    const [d, setData] = useState([])
    const [textInAddInput, setTextaddInput] = useState("");
    
    const getAddInput = (event) =>{
        const text = event.target.value
       
        setTextaddInput(text)
         
    }

    const getText = (event) => {
       const text = event.target.value  
    }

    const onClick = () =>{
         const newObj = {id: getNumber(24), text: textInAddInput, isDel: false}
         setData([newObj, ...d] )
         setTextaddInput("")
    }

    const getNumber =  (num) => {
       return Math.random(num)
    }

    const delElement = (id) => {
        let value = d.filter(e => e.id !== id)
        setData(value)
    }

    return(
        <Fragment>
            <AddElement id={d.length} onClick={onClick} getAddInput={getAddInput} text={textInAddInput} />
            <div className={style.wrapper}>
               
            {/* // TODO: ВЫВЕСТИ СПИСОК КОМПОНЕНТОВ ЧЕРЕЗ ФУНКЦИЮ МАР() */}
            {d.map(data => <Element key={data.id} text={data.text} del={delElement} id={data.id}  /> )}
            {data.map(item => <Element key={item.id} text={item.text} id={item.length} getText={getText}  />)}
            </div>
        </Fragment>
    )   

}

export default MainContent