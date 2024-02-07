import { Fragment, useState } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
        <Header/>
        <MainContent/>
    </Fragment>
  ) 
}

export default App
