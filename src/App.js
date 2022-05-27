import React from 'react'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import ViewStudent from './pages/ViewStudent';
import Delete from './pages/Delete';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/students/:id' element={<ViewStudent/>}></Route> 
          <Route path='/delete/:id' element={<Delete/>}></Route> 
        </Routes>
      </Router>
    </div>
  )
}

export default App