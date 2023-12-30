import { Outlet } from 'react-router-dom'
import Navbar from './Components/Home/Navbar'
import Footer from './Components/Home/Footer'
import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
