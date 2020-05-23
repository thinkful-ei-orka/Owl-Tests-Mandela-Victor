import React from 'react';
import participants from '../store'

// import './participants.css'

export default function Participant(props) {
    let stageStatus = '' ;
    // props.onStage = true ? stageStatus = 'on stage' : stageStatus = '';
    // props.inSession = true ? sessionStatus = 'in session' : sessionStatus = '';

         return (
             <div className='Participant' id={props.id}>
                 <h3 className='Participant-name'>{props.name}</h3>
                 <img className='Participant-avatar' src={props.avatar} />
                 <p className='Participant-inSession'>{props.inSession}</p>
                 <p className='Participant-onStage'>{stageStatus}</p>
             </div>
         );
     }