
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './components/login';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Dashboard  from './components/dashboard';
import Home from './components/Home';
import Employee from './components/Employee';
import Category from './components/Category';
import Profile from './components/Profile';
import AddCategory from './components/AddCategory';

function App() {


  return (

  
    <BrowserRouter>
    <Routes>
      <Route path="/adminlogin" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard  />}>   
       <Route path="" element={<Home /> }></Route>
       <Route path="/dashboard/employee" element={<Employee />}></Route>
       <Route path="/dashboard/category" element={<Category />}></Route>
       <Route path="/dashboard/profile" element={<Profile />}></Route>
       <Route path="/dashboard/add_category" element={<AddCategory />}></Route>   
       

     </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
