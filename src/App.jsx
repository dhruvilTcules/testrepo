import {Route,Routes} from "react-router-dom";
import Home from "./home/Home";
export default function App() {
  return (
    <>
     <div className="dark:bg-slate-900 dark:text-white"> 
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        
      </Routes>
     </div>
    </>
    
  )
}

