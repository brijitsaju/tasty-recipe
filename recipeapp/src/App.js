
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/' element={<LandingPage />}></Route>
      </Routes>
      <Footer />

    </>
  );
}

export default App;
