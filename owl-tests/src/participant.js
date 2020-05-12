import React from 'react';

import './participants.css'

export default class Participant extends React.Component {
     render() {
         return (
             <div className='Participant'>
                 <h3 className='Participant-Name'>{this.props.Name}</h3>
                 <img className='Participant-Avatar' src={this.props.Avatar} />
                 <p className='Participant-InSession'>{this.props.InSession}</p>
                 <p className='Participant-OnStage'>{this.props.OnStage}</p>
             </div>
         );
     }
 }