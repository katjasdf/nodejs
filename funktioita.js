/* Toteuta moduuli funktioita, joka toteuttaa nuolifunktiot

- tulostaNelio(sivu, tulostin), joka tulostaa tähtineliön tulostin-funktiolla
- tulostaSuorakulmio(leveys, korkeus, tulostin), joka tulostaa tähtisuorakulmion tulostin-funktiolla
- tulostaKolmio)korkeus, tulostin), joka tulostaa suorakulmaisen tähtikolmion kärki ylöspäin tulostinfunktiolla
- lukusarjanSumma(n), joka palauttaa lukusarjan 1..n summan
- kertoma(n), joka palauttaa luvun n kertoman, siis lukujen 1..n tulon.
Kokeile tulostamista tulostus-moduulin palveluilla
*/


const { tulostaTahtia, tulostaTulos } = require('./tulostus'); // .js-liitteen voi jättää pois

tulostaNelio = (sivu) => {
    for (i = 0; i < sivu; i++) {
        tulostaTahtia(sivu)
    }
};

tulostaSuorakulmio = (leveys, korkeus) => {
    for (i = 0; i < korkeus; i++) {
        tulostaTahtia(leveys)
    }
};

tulostaKolmio = (korkeus) => {
    for (i = 0; i < korkeus; i++) {
        tulostaTahtia(i + 1)
    }
};

lukusarjanSumma = (n) => {
    let luku = 1;
    let summa = 0;
    while (luku <= n) {
        summa = summa + luku;
        luku++;
    }
    return summa;
}

kertoma = (n) => {
    let summa = n;
    while (n > 1) {
        n--;
        summa = summa * n;
    }
    return summa;
}

tulostaNelio(4);
tulostaSuorakulmio(5, 3);
tulostaKolmio(5);
tulostaTulos(lukusarjanSumma(100));
tulostaTulos(kertoma(20));

module.exports = {
    tulostaNelio, 
    tulostaSuorakulmio,
    tulostaKolmio,
    lukusarjanSumma,
    kertoma 
};