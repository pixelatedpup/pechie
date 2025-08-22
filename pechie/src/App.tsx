import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Page from './components/Page'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = "PECHIEDEV"
  },[])

  return (
    <>
      <BrowserRouter basename='/'>
        <Page/> 
        {/* <h1>Hello</h1> */}
      </BrowserRouter>
    </>
  )
}

export default App
