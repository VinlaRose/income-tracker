import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Income from './Page/Income';
import Expense from './Page/Expense';
import Savings from './Page/Savings';
import { Report } from './Page/Report';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <nav>
            <ul>
              <li>
                
                <Link to="/income">Income</Link>
              </li>
              <li>
                <Link to="/expenses">Expense</Link>
              </li>
              <li>
                <Link to="/savings">Savings</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          
      <Routes>
        <Route path="/income" element={<Income/>} />
        <Route path="/expenses" element={<Expense/>} />
        <Route path="/savings" element={<Savings/>} />
        <Route path="/" element={<Report/>} />
        
        
      </Routes>
    </div>
  );
}

export default App;
