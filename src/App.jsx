import { ToastContainer } from "react-toastify"
import Home from "./Home"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
   <>
   <div className="min-h-screen">
    <Home/>
    <ToastContainer />
   </div>
   </>
  )
}

export default App
