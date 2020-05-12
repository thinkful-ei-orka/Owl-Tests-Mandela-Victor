import React from 'react';

// import './participants.css'

export default class Participant extends React.Component {
     render() {
         return (
             <div className='Participant'>
                 <h3 className='Participant-name'>{this.props.name}</h3>
                 <img className='Participant-avatar' src={this.props.avatar} />
                 <p className='Participant-inSession'>{this.props.inSession}</p>
                 <p className='Participant-onStage'>{this.props.onStage}</p>
             </div>
         );
     }
 }