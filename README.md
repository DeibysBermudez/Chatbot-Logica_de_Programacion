# 🤖 Chatbot API Experto logica de Programación
Este proyecto es un chatbot web que responde preguntas sobre lógica de programación, algoritmos y estructuras de control. El backend está desarrollado en **Python** usando **FastAPI** y el frontend en **HTML, CSS y JavaScript**. El bot utiliza modelos de lenguaje a través de la API de OpenRouter.

---

## Características

- Chat web moderno y responsivo
- Fondo tecnológico y estilo visual personalizable
- Comunicación en tiempo real con el backend
- Respuestas especializadas en lógica de programación y algoritmos

---

## 📁 Estructura del proyecto
```
chatbot-logica_de_Programacion/
│  
├── chatbot.py         # Backend FastAPI principal
├── config.py          # Prompt del sistema para el bot
├── .env               # Variables de entorno (API keys, URL)
|
├── Frontend/
│   ├── index.html     # Página principal del chat
│   ├── script.js      # Lógica y comportamiento del chat
│   └── styles.css     # Estilos personalizados
└── README.md          # Documentación del proyecto
```
---

## Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/DeibysBermudez/chatbot-logica_de_Programacion.git

cd chatbot-logica_de_Programacion
```

### 2. Instala dependencias del backend

```bash
pip install fastapi uvicorn openai python-dotenv
```

### 3. Configura variables de entorno

Crea un archivo `.env` con el siguiente contenido (reemplaza con tus claves):

```
API_KEY=tu_api_key_openrouter
BASE_URL=https://openrouter.ai/api/v1
```

---

## Ejecución

### 1. Inicia el backend

```bash
uvicorn chatbot:app --reload
```

El backend por defecto en `http://localhost:8000`.


### 2. Abre el frontend

Abre el archivo `index.html` en tu navegador (puedes usar Live Server de VSCode para mayor comodidad).

---

## Uso

1. Escribe tu pregunta sobre lógica de programación en el chat.
2. El bot responderá en segundos con información clara y precisa.

---

## 📬 Ejemplo de uso
Petición POST a /chat:
```json
{"pregunta": "¿hola, que puedes hacer?"}  
```
Respuesta esperada:
```json
{"respuesta": "¡Hola! Puedo ayudarte con conceptos relacionados con la lógica de programación, estructuras de control (como condicionales y ciclos), resolución de problemas, y buenas prácticas para desarrollar algoritmos...."}  
```
---

## Créditos

- [FastAPI](https://fastapi.tiangolo.com/)
- [OpenRouter](https://openrouter.ai/)

---


## ☁️ Despliegue en Render
1. Crea un nuevo "Web Service" en Render
2. Conecta tu repositorio GitHub
3. Configura las variables de entorno
4. Usa este comando de inicio:
```bash
uvicorn main:app --host 0.0.0.0 --port 8000  
```

## 👨‍💻 Autor del codigo base
Ing. Cristian Díaz <p align="center">
  <img width="80" src="https://i.imgur.com/YYf2LgH.png">
</p>

## 👨‍💻 Creacion del Frontend y Modificaciones
Est. Deibys bermudez

Est. Yantrresky River---

