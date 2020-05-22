import React from 'react';

export default function Emoji(props) {
     let message = '';
     switch (props.type) {
          case 'thumbs-up':
               message = 'gave a thumbs up.';
               break;
          case 'thumbs-down':
               message = 'gave a thumbs down.';
               break;
          case 'raise-hand':
               message = 'raised their hand.';
               break;
          case 'clap':
               message = 'clapped.';
               break;
          case 'join':
               message = 'joined.';
               break;
          case 'leave':
               message = 'left.';
               break;
          case 'join-stage':
               message = 'join the stage.';
               break;
          case 'leave-stage':
               message = 'left the stage.';
               break;
          default:
               message = 'null';
     }
     return (
          <li className='emoji-message'>
               <h3>
                    <span>
                         {props.name}
                    </span>
                    {message}
               </h3>
          </li>
     )
}