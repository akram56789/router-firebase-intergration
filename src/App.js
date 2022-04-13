import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Orders from './Components/Orders/Orders';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import Reviews from './Components/Reviews/Reviews';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Products' element={<Products></Products>}></Route>
        <Route path='/Orders' element={<Orders></Orders>}></Route>
        <Route path='/Reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
