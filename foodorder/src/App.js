
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import './App.scss'
import Navbar from './components/NavBar';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
}

export default App;
