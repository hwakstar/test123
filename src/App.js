// src/App.js
   import React, { useState } from 'react';
   import { sendMessage } from './telegramService';

   const App = () => {
       const [chatId, setChatId] = useState('');
       const [message, setMessage] = useState('');

       const handleSendMessage = async () => {
           await sendMessage(chatId, message);
           setMessage('');
       };

       return (
           <div>
               <h1>Telegram Bot</h1>
               <input
                   type="text"
                   placeholder="Chat ID"
                   value={chatId}
                   onChange={(e) => setChatId(e.target.value)}
               />
               <textarea
                   placeholder="Message"
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
               />
               <button onClick={handleSendMessage}>Send Message</button>
           </div>
       );
   };

   export default App;