import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantList from './participantlist';

it('renders', () => {
     const div = document.createElement('div');
     ReactDOM.render(<ParticipantList participants={[]} />, div);
     ReactDOM.unmountComponentAtNode(div);
})

it('renders', () => {
     const tree = renderer
     .create(<ParticipantList className='ParticipantList' participants={[]} />)
     .toJSON();
     expect(tree).toMatchSnapshot();
})