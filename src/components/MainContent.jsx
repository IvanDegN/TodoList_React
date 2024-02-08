import { Fragment, useState } from "react"
import style from '../style/MainContent.module.css'
import Button from "./Button"
import Element from "./Element"
import AddElement from "./AddElement"
import data from '../data/data'


const MainContent = () =>{
    const [object, setObject] = useState([])
    const [text, setText] = useState('');
    const [textInAddInput, setTextaddInput] = useState('');

    const getAddInput = (event) =>{
        const text = event.target.value
        console.log(text)
        setTextaddInput(text)
    }


    const getText = (event) => {
       const text = event.target.value
        console.log(text)
        setText(text)
    }

    const onClick = () =>{
        const newObj = {id: data.id, text: getText}
       console.log( setObject([...object, newObj]));   

    }




    return(
        <Fragment>
            <AddElement name={data.name} id={data.id} data={data} onClick={onClick} getAddInput={getAddInput} text={textInAddInput} />
            <div className={style.wrapper}>
               
            {/* // TODO: ВЫВЕСТИ СПИСОК КОМПОНЕНТОВ ЧЕРЕЗ ФУНКЦИЮ МАР() */}

            {data.map(data => <Element key={data.id} text={data.text} getText={getText} /> )}
            {object.map(object => <Element key={object.id} {...object.name} /> )}
               
            </div>
        </Fragment>
    )   

}

export default MainContent