/* Toteuta moduuli funktioita, joka toteuttaa nuolifunktiot

- tulostaNelio(sivu, tulostin), joka tulostaa tähtineliön tulostin-funktiolla
- tulostaSuorakulmio(leveys, korkeus, tulostin), joka tulostaa tähtisuorakulmion tulostin-funktiolla
- tulostaKolmio)korkeus, tulostin), joka tulostaa suorakulmaisen tähtikolmion kärki ylöspäin tulostinfunktiolla
- lukusarjanSumma(n), joka palauttaa lukusarjan 1..n summan
- kertoma(n), joka palauttaa luvun n kertoman, siis lukujen 1..n tulon.
Kokeile tulostamista tulostus-moduulin palveluilla
*/


const { tulostaTahtia, tulostaTulos } = require('./tulostus'); // .js-liitteen voi jättää pois

const tulostaNelio = (sivu, tulostaRivi) => {
    for (i = 0; i < sivu; i++) {
        tulostaRivi(sivu)
    }
};

const tulostaSuorakulmio = (leveys, korkeus, tulostaRivi) => {
    for (i = 0; i < korkeus; i++) {
        tulostaRivi(leveys)
    }
};

const tulostaKolmio = (korkeus, tulostaRivi) => {
    for (i = 0; i < korkeus; i++) {
        tulostaRivi(i + 1)
    }
};

const lukusarjanSumma = (n) => {
    let luku = 1;
    let summa = 0;
    while (luku <= n) {
        summa = summa + luku;
        luku++;
    }
    return summa;
}

const kertoma = (n) => n > 0 ? kertoma(n - 1) * n : 1;

tulostaNelio(4, tulostaTahtia);
tulostaSuorakulmio(5, 3, tulostaTahtia);
tulostaKolmio(5, tulostaTahtia);
tulostaTulos(lukusarjanSumma(100));
tulostaTulos(kertoma(20));

module.exports = {
    tulostaNelio, 
    tulostaSuorakulmio,
    tulostaKolmio,
    lukusarjanSumma,
    kertoma 
};