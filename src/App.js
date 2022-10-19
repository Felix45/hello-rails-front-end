import './App.css';
import Greeting from './components/Greeting';
import Home from './components/Home';
import NaVBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NaVBar />
        <Routes>
         <Route exact path="/*" element={<Home />} />
         <Route exact path="/greet" element={<Greeting />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
