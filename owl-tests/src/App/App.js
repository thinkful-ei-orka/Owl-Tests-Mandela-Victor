import React from 'react';
import participants from '../participantStore.js';
import List from '../Lists/List.js';
import Stage from '../Stage/Stage.js'
import Chat from '../Chat/Chat.js'

import './App.css'

function App(props) {
  //will props.participants work?
  return (
    <main className='App'>
      <List participants={props.participants} />
      <Chat participants={props.participants} chatEvents={props.chatEvents}/>
      <Stage participants={props.participants} />
    </main>
  );
}

export default App;