
import './App.css'
import Signin from './Signin'
import Signup from './Signup'
import Appbar from './Appbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCourse from './Addcourse';

function App() {

  return (
    <div>
           <Router>
             <Appbar />
                <Routes>
                    <Route path={"/signin"} element={<Signin />} />
                    <Route path={"/signup"} element={<Signup />} />
                    <Route path={"/addcourse"} element={<AddCourse />} />
                </Routes>
            </Router>
     </div>
    
  )
}

export default App
