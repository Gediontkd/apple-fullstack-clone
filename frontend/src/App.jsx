import { useState } from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Resource/css/styles.css'
import { Routes,Route} from 'react-router-dom';
//components
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Footer />
      
    </>
  )
}

export default App
