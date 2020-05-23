import React from 'react';
import StageParticipant from './StageParticipant';
import store from '../store'


import './Stage.css';

export default function Stage(props) {
    const participants = store.participants.map(participant => {
        if (participant.onStage) {
            return (
                <StageParticipant id={participant.id} avatar={participant.avatar} name={participant.name}/>
            )
        } else 
        return null
    })

         return (
             <div className='Stage' key={props.id}>
                <div className='Stage-Participants'>
                    {participants}
                </div>
             </div>
         );
     }