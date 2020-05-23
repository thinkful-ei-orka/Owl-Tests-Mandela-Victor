import React from 'react';

export default function Message(props) {
     return (
          <li className='Chat-message'>
               <div className='Chat-message-header'>
                    <img src={props.avatar} alt='Participant Avatar'></img>
                    <h3>
                         {props.name}
                         <span>
                              {props.time}
                         </span>
                    </h3>
               </div>
               <p>
                    {props.message}
               </p>
          </li>
     )
}