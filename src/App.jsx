import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './sections/navbar/Navbar'
import Footer from './sections/footer/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
