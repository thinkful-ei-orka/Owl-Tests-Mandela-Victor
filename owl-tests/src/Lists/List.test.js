import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';

it('renders', () => {
     const div = document.createElement('div');
     ReactDOM.render(<List participants={[]} />, div);
     ReactDOM.unmountComponentAtNode(div);
})

it('renders', () => {
     const tree = renderer
     .create(<List className='ParticipantList' participants={[]} />)
     .toJSON();
     expect(tree).toMatchSnapshot();
})