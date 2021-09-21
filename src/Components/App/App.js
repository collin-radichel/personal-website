import { useSelector } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route path="/" exact>
          
        </Route>
      </Router>
    </div>
  );
}

export default App;