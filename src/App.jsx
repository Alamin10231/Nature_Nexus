
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import NewsLetter from './components/NewsLetter/NewsLetter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import { useState } from 'react'


function App() {




  const [change,setChange] = useState(true)
const colorchange = ()=>{
setChange(!change)

}
  const notify =()=>{
    toast("")
  }

  return (
    <>
      <div>
       
     <Navbar></Navbar>
     <Hero></Hero>

     <div className='btncontainer space-x-6'>
     <button
     
     onClick={colorchange}
     className={` border border-gray-400 px-7 py-2 text-xl font-semibold bg-green-100  text-black rounded-md
      ${change?'active bg-green-500':''} ` 
    }> All Items</button>
      
      <button
     
     onClick={colorchange}
     className={` border border-gray-400 px-7 py-2 text-xl font-semibold  bg-green-100 text-black rounded-md 
      ${!change?'active bg-green-500':''}
      ` 
    }> liked items</button>
     </div>
     <Cards
     notify={notify}
     
     ></Cards>
     
     <NewsLetter></NewsLetter>
     <Footer></Footer>   
     <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition: Bounce     
      ></ToastContainer>
 
      </div>
    </>
  )
}

export default App
