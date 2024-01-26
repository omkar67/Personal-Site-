import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
          
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
    </Routes>
   
  </Router>
  );
}

export default App;
