import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Client from "../src/pages/Client";
import Emailpage from "../src/pages/Emailpage";
import Messagepage from "./pages/Messagepage";
import Email from "./pages/Emailpage";
import Signin from './pages/MainCon';
import Navbar from './pages/Navbar';
import Header from './pages/Header';
import Reset from './Component/dashboard/Reset';



function App() {
  return  (
      <div>
        <Router>
            <Routes>
              <Route path='/'  element={<Dashboard />}/>
            </Routes>
            <Routes>
              <Route path='/Navbar'  element={<Dashboard />}/>
            </Routes>
            <Routes>
              <Route path='/client' element={<Client/>}/>
            </Routes>
            <Routes>
              <Route path='/Email' element={<Emailpage/>}/>
            </Routes> 
            <Routes>
              <Route path='/Message' element={<Messagepage/>}/>
            </Routes>         
        </Router>
      </div>
  );
  
}

export default App;
