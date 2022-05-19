import { Route, Routes } from 'react-router-dom';
import './App.css';
import BarChartPage from './pages/BarChartPage';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/barchartpage' element={<BarChartPage />} />
      </Routes>
    </>
  );
}

export default App;
