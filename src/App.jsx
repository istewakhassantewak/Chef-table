import { ToastContainer } from "react-toastify";
import './App.css'
import Header from './Component/Header/Header'
import Recipe from './Component/Recipe/Recipe'

function App() {


  return (
    <>
      <Header></Header>
      <Recipe></Recipe>
      <ToastContainer />
    </>
  )
}

export default App
