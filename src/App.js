import './App.css';
import Header from './components/Header';
import { redirectToReddit, handleRedirectCallback } from './api/reddit'
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    handleRedirectCallback();
  },[]);

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
