import React from 'react';
import StageParticipant from './StageParticipant'

import './Stage.css';

export default function Stage(props) {
    const participants = props.participants.map(participant => {
        if (participant.onStage) {
            return (
                <StageParticipant id={participant.id} avatar={participant.avatar} name={participant.name} />
            )
        } else return null;
    })

         return (
             <div className='Stage'>
                <div className='Stage-Participants'>
                    {participants}
                </div>
             </div>
         );
     }