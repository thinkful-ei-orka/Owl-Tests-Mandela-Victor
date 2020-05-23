import React from 'react';
import store from '../store.js';
import './List.css'
import Participant from './Participant'

export default function List(props) {
    
    const participants = store.participants.map(participant => (
         <Participant 
         key={participant.id} 
         name={participant.name} 
         avatar={participant.avatar} 
         inSession={participant.inSession} 
         onStage={participant.onStage} 
         />
     ));
 
     return (
         <section className='List'>
             <ul className='List-Participants'>
                 {participants}
             </ul>
         </section>
     );
 }