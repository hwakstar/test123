// src/telegramService.js
   import axios from 'axios';

   const TELEGRAM_API_URL = `https://api.telegram.org/bot7329090146:AAGu_u_xrAbOLOWC2FAxbOFLZFXoQV9mz4M`;

   export const sendMessage = async (chatId, text) => {
       try {
           const response = await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
               chat_id: -4242422850,
               text: text,
           });
           return response.data;
       } catch (error) {
           console.error("Error sending message:", error);
       }
   };