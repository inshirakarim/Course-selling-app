
import './App.css'
import Signin from './Signin'
import Signup from './Signup'
import Appbar from './Appbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
           <Router>
             <Appbar />
                <Routes>
                    <Route path={"/signin"} element={<Signin />} />
                    <Route path={"/signup"} element={<Signup />} />
                </Routes>
            </Router>
     </div>
    
  )
}

export default App
