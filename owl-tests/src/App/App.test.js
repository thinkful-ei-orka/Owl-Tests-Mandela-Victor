import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../App/App';
import '../Lists/List'

it('renders', () => {
     const div = document.createElement('div');
     ReactDOM.render(<App />, div);
     ReactDOM.unmountComponentAtNode(div);
})

it('renders', () => {
     const tree = renderer
     .create(<App className='App'/>)
     .toJSON();
     expect(tree).toMatchSnapshot();
})