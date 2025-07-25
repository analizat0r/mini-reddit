import './App.css';
import Header from './components/Header';
import redirectToReddit from '../src/utils/auth'

function App() {
  
  function handleLogin(){
    redirectToReddit();
  };
  
  return (
    <div>
      <Header handleLogin={handleLogin}/>
    </div>
  );
}

export default App;
