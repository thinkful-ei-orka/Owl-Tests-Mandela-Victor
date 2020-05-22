import React from 'react';
import participants from '../participantStore';
import List from '../List';
import Stage from '../Stage'
import Chat from '../Chat'

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