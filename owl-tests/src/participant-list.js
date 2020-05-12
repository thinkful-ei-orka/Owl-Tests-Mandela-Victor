import React from 'react';
import Participant from './participant';

export default function list(props) {
     const participants = props.participants.map(participant => (
         <Participant key={participant.id} Name={participant.Name} avatar={participant.Avatar} InSession={participant.InSession} OnStage={participant.OnStage} />
     ));
 
     return (
         <section className="Participants">
             <div className="Participants-List">
                 {participants}
             </div>
         </section>
     );
 }