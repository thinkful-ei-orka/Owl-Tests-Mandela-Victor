import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Message from './Message';

describe('Message Component', () =>{
    let messageTest = [{
        avatar: 'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        name: 'Koren Templeton',
        message: 'Hello World!'
    }]

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Message avatar={messageTest.avatar} name={messageTest.name} message={messageTest.message} />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Message avatar={messageTest.avatar} name={messageTest.name} message={messageTest.message} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})