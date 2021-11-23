import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import './App.css';
import { useState } from 'react';


function App() {
  const [articles, setArticles] = useState([]);
  
  return (
    <BrowserRouter>
      <div className="App">
        <Nav setArticles = {setArticles} />
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/articles' element={<Articles articles={articles} setArticles = {setArticles} />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
