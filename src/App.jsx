
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/home/Home'

function App() {

  return (
    <>
   
  <Home></Home>
       <ToastContainer
        autoClose={1000}
        hideProgressBar={true}
        pauseOnHover={false}
        closeOnClick
        draggable={false}
      />
    </>
  )
}

export default App
