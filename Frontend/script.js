const chat = document.getElementById('chat');
const input = document.getElementById('message');
const sendBtn = document.getElementById('send');

function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function showTyping() {
  const typing = document.createElement('div');
  typing.className = 'typing bot';
  typing.id = 'typing-indicator';
  typing.textContent = 'Escribiendo...';
  chat.appendChild(typing);
  chat.scrollTop = chat.scrollHeight;
}

function removeTyping() {
  const typingMsg = document.getElementById('typing-indicator');
  if (typingMsg) chat.removeChild(typingMsg);
}

async function sendMessage() {
  const pregunta = input.value.trim();
  if (!pregunta) return;

  addMessage(pregunta, 'user');
  input.value = '';
  showTyping();

  try {
    // Cambia la URL si tu backend está en otro puerto/dominio
    const response = await fetch('http://localhost:8000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ pregunta })
    });

    removeTyping();

    if (response.ok) {
      const data = await response.json();
      addMessage(data.respuesta, 'bot');
    } else {
      addMessage('Error al obtener la respuesta del bot.', 'bot');
    }
  } catch (error) {
    removeTyping();
    addMessage('Hubo un problema de conexión.', 'bot');
  }
}

sendBtn.addEventListener('click', sendMessage);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendMessage();
});