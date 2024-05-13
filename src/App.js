import './App.css';
import Header from './components/Header.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/index.tsx'; 
import Footer from './components/Footer.tsx';

// https://usetola.com/

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
