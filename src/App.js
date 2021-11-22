import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Nav />
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
        <Articles />
      </div>
    </BrowserRouter>
  );
}

export default App;
