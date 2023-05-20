import './App.css';
import './styles.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Books from './Pages/Books';
import Categories from './Pages/Categories';

function App() {
  const [url, setUrl] = useState(true);
  const statechange = () => {
    setUrl(!url);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main-wrapper">
          <Navbar url={url} />
          <Routes>
            <Route path="/" element={<Books statechange={() => statechange()} />} />
            <Route path="/categories" element={<Categories statechange={() => statechange()} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
