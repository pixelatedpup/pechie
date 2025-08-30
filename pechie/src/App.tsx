import { useEffect} from 'react'
import './App.css'
import Page from './components/Page'
import { BrowserRouter } from 'react-router-dom'

function App() {
  useEffect(() => {
    document.title = "PECHIEDEV"
  },[])

  return (
    <>
      <BrowserRouter basename='/'>
        <Page/> 
        
      </BrowserRouter>
    </>
  )
}

export default App
