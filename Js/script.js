const form = document.getElementById('nyeremenyForm');

// Elemek referenciái
const nev = document.getElementById('nev');
const datum = document.getElementById('datum');
const email = document.getElementById('email');
const modell = document.getElementById('modell');
const pontszam = document.getElementById('pontszam');
const okok = document.getElementById('okok');
const kivel = document.getElementById('kivel');
const robot = document.getElementById('robot');

// Hibaüzenet tárolók
const errorNev = document.getElementById('error-nev');
const errorDatum = document.getElementById('error-datum');
const errorEmail = document.getElementById('error-email');
const errorModell = document.getElementById('error-modell');
const errorPontszam = document.getElementById('error-pontszam');
const errorOkok = document.getElementById('error-okok');
const errorKivel = document.getElementById('error-kivel');
const errorRobot = document.getElementById('error-robot');


form.addEventListener('submit', function(event) {
    let isValid = true;

    // Előző hibák törlése
    const errors = document.querySelectorAll('.error-msg');
    errors.forEach(el => el.textContent = '');
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(el => el.classList.remove('input-error'));

    // --- VALIDÁCIÓK ---

    // Név
    if (nev.value.trim() === "") {
        errorNev.textContent = "A név megadása kötelező!";
        nev.classList.add('input-error');
        isValid = false;
    }

    // Email
    if (email.value.trim() === '' || !email.checkValidity()) {
        errorEmail.textContent = 'Érvényes email címet adjon meg!';
        email.classList.add('input-error');
        isValid = false;
    }

    // Dátum
    if (datum.value === '') {
        errorDatum.textContent = 'A születési dátum megadása kötelező!';
        datum.classList.add('input-error');
        isValid = false;
    }

    // Kedvenc modell
    if (modell.value === '') {
        errorModell.textContent = 'Válassza ki kedvencét!';
        modell.classList.add('input-error');
        isValid = false;
    }

    // Pontszám select
    if (pontszam.value === '-1') {
        errorPontszam.textContent = 'Válassza ki az elért pontszámot!';
        pontszam.classList.add('input-error');
        isValid = false;
    }

    // Okok
    if (okok.value.trim() === '') {
        errorOkok.textContent = 'Írja meg miért szeretné megnyerni a jegyeket!';
        okok.classList.add('input-error');
        isValid = false;
    }

    // Kivel
    if (kivel.value.trim() === '') {
        errorKivel.textContent = 'Írja meg kivel szeretne elmenni a divatbemutatóra!';
        kivel.classList.add('input-error');
        isValid = false;
    }

    // Checkbox
    if (!robot.checked) {
        errorRobot.textContent = 'Jelölje be, hogy nem robot!';
        isValid = false;
    }

    // --- DÖNTÉS ---
    if (!isValid) {
        event.preventDefault(); // Megállítjuk a küldést
        console.log('Hiba az űrlapon!');
    } else {
        console.log('Minden adat rendben, küldés...');
    }
});