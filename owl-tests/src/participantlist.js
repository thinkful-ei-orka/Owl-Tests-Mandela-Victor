import React from 'react';
import Participant from './participant';
import participantStore from './participantstore';

export default function list(props) {
     const participants = props.participants.map(participant => (
         <Participant key={participant.id} name={participant.name} avatar={participant.avatar} inSession={participant.inSession} onStage={participant.onStage} />
     ));
 
     return (
         <section className="ParticipantList">
             <div className="List-Participants">
                 {participants}
             </div>
         </section>
     );
 }