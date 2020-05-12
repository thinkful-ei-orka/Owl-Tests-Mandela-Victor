import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

it('renders', () => {
     const div = document.createElement('div');
     ReactDOM.render(<Participant />, div);
     ReactDOM.unmountComponentAtNode(div);
})

it('renders', () => {
     const tree = renderer
     .create(<Participant className='Participant'/>)
     .toJSON();
     expect(tree).toMatchSnapshot();
})