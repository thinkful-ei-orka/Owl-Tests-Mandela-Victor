import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Stage from '../Stage/Stage'

it('renders', () => {
     const div = document.createElement('div');
     ReactDOM.render(<Stage />, div);
     ReactDOM.unmountComponentAtNode(div);
})

it('renders', () => {
     const tree = renderer
     .create(<Stage className='Stage'/>)
     .toJSON();
     expect(tree).toMatchSnapshot();
})