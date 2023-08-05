import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Homepage from './components/Homepage';
import ComputerBuild from './components/ComputerBuild';
import Register from './components/Register';
import Login from './components/Login';
import AddComputerForm from './components/AddComputerForm';
import EditComputerForm from './components/EditComputerForm';

function App() {
  const [allPcs, setAllPcs] = useState([]);
  
  useEffect( () => {
    axios.get('http://localhost:8000/api/dashboard')
      .then((res) => {setAllPcs(res.data)})
      .catch((err)=> console.log(err));
      }, [])

  return (
    <div className="appContainer">
      <BrowserRouter>
      <div className="appTop">
        <Header />
      </div>
      
      <div className="appBodyContainer">
        <div className="sidebar">
          <Sidebar allPcs={allPcs} setAllPcs={setAllPcs}/>
        </div>
        <div className="appContent">
          <Routes>
            <Route path={`/register`} element={<Register />}/>
            <Route path={`/login`} element={<Login />}/>
            <Route path="/" element={<Homepage />}/>
            <Route path={`/computer/:id`} element={<ComputerBuild allPcs={allPcs} setAllPcs={setAllPcs}/>}/>
            <Route path="/add" element={<AddComputerForm allPcs={allPcs} setAllPcs={setAllPcs}/>}/>
            <Route path={`/edit/:id`} element={<EditComputerForm allPcs={allPcs} setAllPcs={setAllPcs}/>}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
