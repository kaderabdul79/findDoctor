import './App.css';
import Service from './components/Service/Service';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      
      {/* <Router>
        <Routes>
         <Route path="" element={<Header />}></Route>
          <Route exact path="/" element={<h1>Home Page</h1>} /> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      
      </Router> */}
    </div>
  );
}

export default App;
