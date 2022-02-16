import { Navigate, Route, Routes, Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import  ListBooks  from './components/ListBooks';
import InsertBook from './components/InsertBook';

function App() {
  return (
    <div>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListBooks />} /> 
            <Route path="/ListBooks" element={<ListBooks />} />
            <Route path="/insert-book" element={<InsertBook />} />
            <Route path="/edit-book/:id" element={<InsertBook />} />
          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
