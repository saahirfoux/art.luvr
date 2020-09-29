import React from 'react';
import logo from './logo.svg';
import './App.css';

const TikTok = () => {
  return (
    <>
    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@queen._.ljc/video/6791278644426788102" data-video-id="6791278644426788102" >
      <section> 
        <a target="_blank" title="@queen._.ljc" href="https://www.tiktok.com/@queen._.ljc">@queen._.ljc</a> 
          <p>This didn’t get the clout it deserved 
            <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp">##fyp</a>
        </p> 
        <a target="_blank" title="♬ original sound - Im.laurenjohnson" href="https://www.tiktok.com/music/original-sound-6791163141725391621">♬ original sound - Im.laurenjohnson</a> 
      </section> 
    </blockquote> 
    <script async src="https://www.tiktok.com/embed.js"></script>
    </>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TikTok></TikTok>
      </header>
    </div>
  );
}

export default App;
