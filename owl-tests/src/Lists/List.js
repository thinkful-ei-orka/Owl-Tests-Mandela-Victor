import React from 'react';
import participants from '../store';
import './List.css'

export default function List(props) {
    
    const participants = props.participants.map(participant => (
         <Participant key={participant.id} name={participant.name} avatar={participant.avatar} inSession={participant.inSession} onStage={participant.onStage} />
     ));
 
     return (
         <section className='List'>
             <ul className='List-Participants'>
                 {participants}
             </ul>
         </section>
     );
 }