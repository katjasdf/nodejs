/* Tee moduuli tulostus, joka tarjoaa funktiot
- tulostaTahtia(maara), joka tulostaa konsolille n tähteä ja rivinvaihdon
- tulostaTulos(tulos), joka tulostaa parametrina annetun tuloksen siten, että sitä ennen ja sen
jälkeen on samanmittainen rivi väliviivoja. Huomaa, että tulos voi olla merkkijono, numero, tai
jotain muuta. Se on syytä muuntaa merkkijonoksi ennen tulostusta.
*/

const tulostaTahtia = (maara) => console.log("* ".repeat(maara));

const tulostaTulos = (tulos) => {
    let viiva = "-".repeat(tulos.toString().length);
    console.log(viiva);
    console.log(tulos);
    console.log(viiva);
};


tulostaTahtia(10);
tulostaTulos("Tämä on lopputulos");
tulostaTulos(34523452);

module.exports = {
    tulostaTahtia, // tai myFunction: myFunction
    tulostaTulos // eli attribuutti: arvon antava funktio
};