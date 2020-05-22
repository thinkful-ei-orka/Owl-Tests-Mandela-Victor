import React from 'react';
import Emoji from './Emoji.js';
import Message from './Message';
import './chat.css';


export default function Chat(props) {
    const chat = props.chatEvents.map(event => {
        const participant = props.participants.find(participant =>
            participant.id === event.paricipantId);

            if (event.type === 'Message') {
                const chatTimestamp = new Date (event.timestamp);
                const chatTimes = `${chatTimestamp.getHours()}:${chatTimestamp.getMinutes()}`
                return (
                    <Message avatar={participant.avatar} name={participant.name} message={event.message} time={chatTimes} />
                )
            } else
            return <Emoji name={participant.name} message={event.type}/>
    })

    return (
        <section className='Chat'>
            <ul className='Chat-list'>
                {chat}
            </ul>
        </section>
    )
}