import React from 'react';
import Emoji from './Emoji.js';
import Message from './Message';
import './Chat.css';
import store from '../store'


export default function Chat(props) {
    const chat = store.chatEvents.map(event => {
        const participant = store.participants.find(participant =>
            participant.id === event.participantId);

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