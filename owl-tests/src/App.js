import React from 'react';
import participantStore from './participantstore';
import participantList from './participantlist';
// import Participants from './participant'

import './App.css'

function App() {

  const participants = participantStore.map(participant => (
    <Participant key={participantStore.participant[id]} name={participantStore.participant[name]} avatar={participantStore.participant[avatar]} inSession={participantStore.participant[inSession]} onStage={participantStore.participant[onStage]} />
));

  // const participants = participantStore.participants;
  return (
    <main className='App'>
      <div className='App-Participants'>
          {participants}
      </div>
      {/* <div className='App-ChatLog'>
          {chatlog}
      </div>
      <div className='App-Stage'>
          {stage}
      </div> */}
    </main>
  );
}

export default App;