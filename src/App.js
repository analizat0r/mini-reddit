import './App.css';
import Header from './components/Header';
import { redirectToReddit, handleRedirectCallback } from './api/reddit';
import { getUserIdentity } from "./api/posts";
import { useEffect } from 'react';
import Button from './components/Button';

function App() {
  
  useEffect(() => {
    handleRedirectCallback();
  },[]);

  function handleLogin(){
    redirectToReddit();
  };
  function getIdentity(){    
    getUserIdentity();
  }
  
  return (
    
    <>
      <div>
        <Header onClick={handleLogin}/>
      </div>
      <div>
        <Button onClick={getIdentity}>Get identity</Button>
      </div>
    </>
    

  );
}

export default App;
