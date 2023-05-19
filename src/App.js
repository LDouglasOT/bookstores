import './App.css';
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './Pages/Books';
import Categories from './Pages/Categories';
import store from './redux/store';

function App() {
  return (

    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
