import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;


function App() {
  useEffect(() => {
    tg.ready()
  })


  return (
    <div className="App">
      <div className='video'>
s
      </div>
    </div>
  );
}

export default App;
