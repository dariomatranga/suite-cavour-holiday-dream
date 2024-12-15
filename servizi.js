html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galleria - Il Mio BnB</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Galleria Foto</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="galleria.html">Galleria</a></li>
                <li><a href="servizi.html">Servizi</a></li>
            </ul>
        </nav>
    </header>
    
    <section id="gallery">
        <h2>Le Nostre Foto</h2>
        <div class="photo">
            <img src="foto1.jpg" alt="Camera Matrimoniale" />
            <p>Camera Matrimoniale</p>
        </div>
        <div class="photo">
            <img src="foto2.jpg" alt="Camera Doppia" />
            <p>Camera Doppia</p>
        </div>
        <div class="photo">
            <img src="foto3.jpg" alt="Giardino" />
            <p>Giardino</p>
        </div>
        <!-- Aggiungi altre foto secondo necessità -->
    </section>
    <footer>
        <p>&copy; 2023 Il Mio BnB</p>
    </footer>
</body>
</html>

### Passo 3: Creare la Pagina Servizi
Ora apri il file servizi.html e copia e incolla il seguente codice:
html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Servizi - Il Mio BnB</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Servizi a Pagamento</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="galleria.html">Galleria</a></li>
                <li><a href="servizi.html">Servizi</a></li>
            </ul>
        </nav>
    </header>
    
    <section id="services">
        <h2>Scegli i tuoi Servizi</h2>
        <form id="services-form">
            <div>
                <input type="checkbox" id="flowers" name="service" value="30">
                <label for="flowers">Mazzo di fiori - 30€</label>
            </div>
            <div>
                <input type="checkbox" id="champagne" name="service" value="70">
                <label for="champagne">Champagne in camera - 70€</label>
            </div>
            <div>
                <input type="checkbox" id="breakfast" name="service" value="15">
                <label for="breakfast">Colazione - 15€</label>
            </div>
            <div>
                <button type="button" id="calculate-button">Calcola Costo Totale</button>
            </div>
            <div id="total-cost"></div>
        </form>
    </section>
    <footer>
        <p>&copy; 2023 Il Mio BnB</p>
    </footer>
    <script src="servizi.js"></script>
</body>
</html>
