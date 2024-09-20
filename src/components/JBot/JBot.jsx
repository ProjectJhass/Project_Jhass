import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

// Componente JBot
export const JBot = () => {
  const [chatOpen, setChatOpen] = useState(false);  // Controla la visibilidad del chat
  const [closing, setClosing] = useState(false);    // Controla la animación de cierre

  const handleOpenModal = () => {
    setChatOpen(true);
  };

  const handleCloseModal = () => {
    setClosing(true); // Inicia la animación de cierre
    setTimeout(() => {
      setChatOpen(false); // Cierra el chat después de la animación
      setClosing(false);  // Resetea el estado de cierre
    }, 500); // La duración de la animación (debe coincidir con el tiempo de la transición)
  };

  return (
    <>
      <div className="fixed right-4 bottom-4 flex items-end space-x-4 z-50">
        {!chatOpen && (
          <button
            className="text-black text-[16px] sm:text-[18px] rounded-full w-[6rem] h-[6rem] font-Open-Sans flex items-center justify-center"
            onClick={handleOpenModal}
          >
            <img
              src="https://res.cloudinary.com/dnweqtuch/image/upload/v1726808416/chatbot_slkuf9.png"
              alt="Chatbot Icon"
              className="w-16 h-16"
            />
          </button>
        )}
        {chatOpen && <Chat setChatOpen={handleCloseModal} closing={closing} />}
      </div>
    </>
  );
};

const Chat = ({ setChatOpen, closing }) => {
  const [message, setMessage] = useState(''); // Mensaje actual del input
  const [messages, setMessages] = useState([
    { text: 'Hola, ¿cómo estás?', sender: 'Jbot' }
  ]); // Historial de mensajes
  const messagesEndRef = useRef(null); // Para hacer scroll automático al final de los mensajes

  // Efecto para hacer scroll automático cuando se actualizan los mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Función para enviar el mensaje al backend
  
  const handleSendMessage = async () => {
    if (message.trim()) {
      const newMessages = [...messages, { text: message, sender: 'Yo' }];
      setMessages(newMessages);

      try {
        const response = await fetch('http://localhost:3000/api/v1/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            history: newMessages.map(msg => msg.text), // Se envía el historial completo
            question: message // La pregunta que acaba de enviar el usuario
          }),
        });

        // Verifica que la respuesta sea exitosa
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }

        const data = await response.json();

        // Asegúrate de acceder al campo correcto de la respuesta
        const botResponse = data.text; // Cambia esto según la estructura de tu respuesta
        console.log(botResponse);
        
        setMessages([...newMessages, { text: botResponse, sender: 'Jbot' }]);
      } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        setMessages([...newMessages, { text: 'Error al obtener la respuesta del chatbot.', sender: 'Jbot' }]);
      }

      // Limpiar el input después de enviar el mensaje
      setMessage('');
    }
  };

  // Función para detectar el evento "Enter" y enviar el mensaje
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={`fixed right-4 bottom-20 max-w-sm p-4 bg-white rounded-lg shadow-2xl z-50 transform transition-all duration-500 ease-out
                    ${closing ? 'opacity-0 translate-y-10 scale-90' : 'opacity-100 translate-y-0 scale-100'}`}>
      {/* Header del chat */}
      <div className="flex items-center justify-between bg-gray-100 p-2 border-gray-300 border rounded-t-lg">
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40" // Cambia la URL por la imagen del usuario
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-gray-800">
            <h2 className="font-semibold">Jbot</h2>
            <p className="text-sm text-gray-600">Activo ahora</p>
          </div>
        </div>
        <button onClick={setChatOpen} className="text-gray-500 text-3xl font-normal pr-3 pb-1 hover:text-gray-700">x</button>
      </div>

      {/* Mensajes del chat */}
      <div className="flex flex-col space-y-4 overflow-y-auto h-64 p-2 bg-gray-50 border-gray-300 border border-t-0 rounded-b-lg">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'Yo' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-2 rounded-lg max-w-xs ${msg.sender === 'Yo' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef}></div> {/* Para hacer scroll automático */}
      </div>

      {/* Input para enviar mensajes */}
      <div className="flex items-center space-x-2 mt-2">
        <button>
          <i className="fas fa-image text-gray-500"></i>
        </button>
        <input
          type="text"
          className="flex-grow p-2 rounded-lg bg-gray-100 text-gray-800 focus:outline-none border border-gray-300"
          placeholder="Aa"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress} // Detectar tecla "Enter"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
          onClick={handleSendMessage} // Enviar mensaje al hacer clic en el botón
        >
          Enviar
        </button>
      </div>
    </div>
  );
};


export default JBot;
