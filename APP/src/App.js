import React from 'react';
import './App.css';

import Navigation from './components/Navbar/Navigation';
//import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { BrowserRouter as Router,  Routes, Route, Link } from "react-router-dom";

import Home from './components/pages';              //funciona n mexe 
import About from './components/pages/About';       //funciona n mexe  
import Cliente from './components/pages/Clientes';  //funciona n mexe Cliente -> Postagem 
import DeletaFake from './components/pages/DeletaFake';

//Testar ainda 
import ModificaPostagem from './components/pages/ModificaPostagem';  //teste ainda 
import DeletaPostagem from './components/pages/DeletaPostagem';

//testes 
import Testes from './components/pages/testes';
import Footere from './components/Navbar/Footer';


//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    <div className="App">  
    <Router>
      <Navigation />
      <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/about" element={<About/>} exact />
      <Route path="/clientes" element={<Cliente/>} exact/>

      {/* TESTES AINDA  */}
      <Route path="/modificar" element={<ModificaPostagem/>} exact/>
      <Route path="/del" element={<DeletaPostagem/>} exact/>
      <Route path="/deleta" element={<DeletaFake/>} exact/>
      {/* <Route path="/testes" element={<Testes/>} exact /> */}

      </Routes>
    </Router>

    <Footere>
      <></>
    </Footere>

    </div>

  );
}

export default App;
