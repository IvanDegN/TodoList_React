import { Fragment } from "react"
import style from '../style/MainContent.module.css'
import Button from "./Button"
import Element from "./Element"
import AddElement from "./AddElement"
import data from '../data/data'


// const data = [
//     {
//     id: 0,
//     text: 'First comment'
//     },
//     {
//         id: 1,
//         text: 'Second comment'
//         },
// ]


const MainContent = () =>{

    //console.log(data    )

    return(
        <Fragment>
            <AddElement/>
            <div className={style.wrapper}>
               
            {/* // TODO: ВЫВЕСТИ СПИСОК КОМПОНЕНТОВ ЧЕРЕЗ ФУНКЦИЮ МАР() */}

            {data.map(data => <Element key={data.id} text={data.text} /> )}

               
            </div>
        </Fragment>
    )   

}

export default MainContent