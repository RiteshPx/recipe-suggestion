import { Route, Routes } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Home from "../src/pages/Home"
import Suggest from './pages/Suggest';
import Help from './pages/Help';
import About from './pages/About';
import Recipt from './pages/Recipt';
function App() {

  return (
    <div className=''>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/suggest' element={<Suggest></Suggest>} ></Route>
        <Route path='/help' element={<Help></Help>} ></Route>
        <Route path='/recipt' element={<Recipt></Recipt>} ></Route>
        <Route path='*' element={<Home></Home>} ></Route>
      </Routes>
      
    </div>
  )
}

export default App
