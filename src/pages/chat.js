import React from "react";
import ChatBox from "../components/layout/chat/chatBox";

export default function Chat() {
    const [textMessage, setTextMessage] = React.useState('');
    const [messageList, setMessageList] = React.useState([]);

    return (
        <>
            <ChatBox>

            </ChatBox>
        </>
    )
}
