import { Route, Routes } from 'react-router-dom';
import './App.css';
import Donation from './Pages/Donation/Donation';
import Home from './Pages/Home/Home';
import Error from './Pages/Shared/Error/Error';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Header/Navbar';

function App() {
  return (
    <div className='px-12'>

        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/donation' element={<Donation></Donation>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
