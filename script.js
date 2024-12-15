javascript
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Blocca il comportamento predefinito del modulo
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if(name && email) {
        alert(`Grazie ${name} per averci contattato! Sarai ricontattato all'indirizzo ${email}.`);
        document.getElementById('contact-form').reset(); // Pulisce il modulo
    } else {
        alert('Per favore, compila tutti i campi!');
    }
});
