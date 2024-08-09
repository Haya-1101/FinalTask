// public/index.js
window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.send-button').addEventListener('click', (event) =>{
        const date = new Date();
        const date_YMD = `(${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}) `;
        const name = date_YMD + document.querySelector('.input-name').value;
        const message = document.querySelector('.input-message').value;
        fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, message: message }) });
    });
});