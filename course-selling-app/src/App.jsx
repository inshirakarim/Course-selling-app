
import './App.css'
import Signin from './Signin'
import Signup from './Signup'
import Appbar from './Appbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCourse from './Addcourse';
import Home from './Home';

function App() {

  return (
  <div>
    <div className='home'>
           <Router>
             <Appbar />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/signin"} element={<Signin />} />
                    <Route path={"/signup"} element={<Signup />} />
                    <Route path={"/addcourse"} element={<AddCourse />} />
                </Routes>
            </Router>
     </div>
    </div>
  )
}

export default App
