import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;


function App() {
  useEffect(() => {
    tg.ready()
  })


  return (
    <div className="App">
      <h1 className='title'>Нуар</h1>
      <div className='video'>
      </div>
      
      <div className='description'>

        <p>Игра состоит из нескольких раундов, в которых игроки исследуют город, собирают доказательства и пытаются вычислить преступника. <br/>Каждый игрок играет определенную роль: детектив, преступник или невиновный житель города. Каждый раунд максимально напряженный и высокооктановый, ведь каждый персонаж старается своими действиями добиться своей цели.</p>

      </div>
    </div>
  );
}

export default App;
