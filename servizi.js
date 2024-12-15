javascript
document.getElementById('calculate-button').addEventListener('click', function() {
    const services = document.querySelectorAll('input[name="service"]:checked');
    let total = 0;
    services.forEach(function(service) {
        total += parseFloat(service.value);
    });
    document.getElementById('total-cost').innerText = `Costo Totale: ${total}€`;
});
