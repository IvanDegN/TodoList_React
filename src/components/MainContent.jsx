import { Fragment, useState } from "react"
import style from '../style/MainContent.module.css'
import Element from "./Element"
import AddElement from "./AddElement"
import data from '../data/data'


const MainContent = () =>{
    const [d, setData] = useState([])
    const [textInGetText, setText] = useState({text: ''});
    const [textInAddInput, setTextaddInput] = useState('');

    const getAddInput = (event) =>{
        const text = event.target.value
        console.log(text)
        setTextaddInput(text)
        
    }


    const getText = (event) => {
       const text = event.target.value
        //console.log(text)
        const editText = {text: text}
        //setText(prev => [...prev, editText] )


        
    }

    const onClick = () =>{
         const newObj = {id: d.length, text: textInAddInput}
         setData( prev => [...prev, newObj] )
    }

    const getNumber =  (num) => {
       return Math.random(num)
    }




    return(
        <Fragment>
            <AddElement id={d.length} onClick={onClick} getAddInput={getAddInput} text={textInAddInput} />
            <div className={style.wrapper}>
               
            {/* // TODO: ВЫВЕСТИ СПИСОК КОМПОНЕНТОВ ЧЕРЕЗ ФУНКЦИЮ МАР() */}
            {data.map(item => <Element key={getNumber(24)} text={item.text} id={item.length} getText={getText}  />)}
            {d.map(data => <Element key={getNumber(42)} text={data.text}  /> )}
            
               
            </div>
        </Fragment>
    )   

}

export default MainContent