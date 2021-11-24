import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import './App.css';
import { useState } from 'react';


function App() {
  const [articles, setArticles] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  return (
    <BrowserRouter>
      <div className="App">
        <Header setSelectedTopic={setSelectedTopic}/>
        <Routes>
          <Route path='/' element={<><Nav setArticles = {setArticles} selectedTopic = {selectedTopic} setSelectedTopic = {setSelectedTopic} /><Articles articles={articles} setArticles = {setArticles} /></>} />
          <Route path='/:topic' element={<Articles articles={articles} setArticles = {setArticles} selectedTopic = {selectedTopic} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
