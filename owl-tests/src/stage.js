import React from 'react';

import './stage.css';

export default class Stage extends React.Component {
     render() {
         return (
             <div className='Card'>
                 <button type='button'>delete</button>
                 <h3 className='Card-title'>{this.props.title}</h3>
                 <p className='Card-content'>{this.props.content}</p>
             </div>
         );
     }
 }