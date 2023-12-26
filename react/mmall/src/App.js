import './App.css';
import Header from "./componenet/Header"
import Main from './componenet/Main';
import { Reset } from 'styled-reset'

function App() {
  return (
    <div className="App">
        <Reset/>
        <Header/>
        <Main/>
    </div>
  );
}

export default App;
