import React from 'react';
import participants from '../store'

export default function StageParticipant(props) {
     return (
          <div className='Stage-Participant' id={props.id}>
               <h3>
                    {props.name}
               </h3>
               <img src={props.avatar}></img>
          </div>
     )
}