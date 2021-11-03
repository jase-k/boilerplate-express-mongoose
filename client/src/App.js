import logo from './logo.svg';
import './App.css';
import Index from './Views/Index';
import {
  BrowserRouter,
  Switch, 
  Route, 
  Routes
} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route exact path="/" element={< Index />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
