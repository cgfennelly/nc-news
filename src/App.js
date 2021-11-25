import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import './App.css';
import { useState } from 'react';
import { UserProvider } from './context/User';


function App() {
  const [articles, setArticles] = useState([]);

  return (
    <BrowserRouter>
      <UserProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<><Nav setArticles={setArticles} /><Articles articles={articles} setArticles={setArticles} /></>} />
            <Route path='/:topic' element={<Articles articles={articles} setArticles={setArticles} />} />
            <Route path='articles/:article_id' element={<SingleArticle />} />
            <Route path='articles/:article_id/comments' element={<SingleArticle />} />
          </Routes>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
