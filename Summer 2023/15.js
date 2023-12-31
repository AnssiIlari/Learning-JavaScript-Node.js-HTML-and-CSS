class Oppilas {
    constructor(nimi, syntymavuosi, osoite, puhelin) {
        this.nimi = nimi;
        this.syntymavuosi = syntymavuosi;
        this._syntymavuosi = new Date(syntymavuosi, 0, 1);
        this.osoite = osoite;
        this.puhelin = puhelin;
        this._arvosanat = [];
    }

    get nimi() {
        return this._nimi;
    }

    set nimi(uusiNimi) {
        this._nimi = uusiNimi;
    }

    get syntymavuosi() {
        return this._syntymavuosi.getFullYear();
    }

    set syntymavuosi(uusiSyntymavuosi) {
        this._syntymavuosi = new Date(uusiSyntymavuosi, 0, 1);
    }

    get osoite() {
        return this._osoite;
    }

    set osoite(uusiOsoite) {
        this._osoite = uusiOsoite;
    }

    get puhelin() {
        return this._puhelin;
    }

    set puhelin(uusiPuhelin) {
        this._puhelin = uusiPuhelin;
    }

    get HyvaOppilas() {
        return this._arvosanat.some((arvosana) => arvosana.arvosana >= 5);
      }
    
      get KurssitLapi() {
        return this._arvosanat.every((arvosana) => arvosana.arvosana >= 1);
      }
    

    tulosta() {
        return `${this.nimi},${this._syntymavuosi.getFullYear()},${this.osoite},${this.puhelin}`;
    }

    laskeIka() {
        let currentYear = new Date().getFullYear();
        return currentYear - this._syntymavuosi.getFullYear();
    }

    lisaaArvosana(arvosana) {
        this._arvosanat.push(arvosana);
    }

    printArvosana() {
        let arvosanaStrings = this._arvosanat.map(arvosana => arvosana.toString());
        return arvosanaStrings.join('.');
    }
    MuutaAsteikko() {
        let asteikko = ['I', 'II', 'III', 'IV', 'V'];
        return this._arvosanat.map((arvosana) => {
          if (arvosana.arvosana <= 2) {
            return asteikko[0];
          } else if (arvosana.arvosana <= 4) {
            return asteikko[1];
          } else if (arvosana.arvosana <= 6) {
            return asteikko[2];
          } else if (arvosana.arvosana <= 8) {
            return asteikko[3];
          } else {
            return asteikko[4];
          }
        });
      }

    
}

class Arvosana {
    constructor(oppiaine, arvosana, suorituspvm) {
        this.oppiaine = oppiaine;
        this.arvosana = Number(arvosana);
        this.suorituspvm = new Date(suorituspvm);
    }

    toString() {
        const day = String(this.suorituspvm.getDate()).padStart(2, '0');
        const month = String(this.suorituspvm.getMonth() + 1).padStart(2, '0');
        const year = this.suorituspvm.getFullYear();
        const formattedDate = `${day}.${month}.${year}`;

        return `${this.oppiaine},${this.arvosana},${formattedDate}`;
      }
}

// let oppilas = new Oppilas("Maija", 1990, "Opistotie 2", "044-7855512");

// oppilas.lisaaArvosana(new Arvosana("Fysiikka", "8", new Date(2020, 2, 4)));
// oppilas.lisaaArvosana(new Arvosana("Matematiikka", "2", new Date(2020, 3, 22)));
// oppilas.lisaaArvosana(new Arvosana("Tietotekniikka", "5", new Date(2020, 10, 5)));

// console.log(oppilas._arvosanat);
// console.log(oppilas.printArvosana());

// let result = oppilas.printArvosana();
// console.log(result);

// console.log(oppilas._arvosanat.toString());
// console.log(oppilas._arvosanat[0].suorituspvm);


function Oppilas_27(nimi, syntymavuosi, osoite, puhelin) {
    let oppilas = {};

    oppilas._nimi = nimi;
    oppilas._syntymavuosi = new Date(syntymavuosi, 0, 1);
    oppilas._osoite = osoite;
    oppilas._puhelin = puhelin;

    oppilas.tulosta = function () {
        return this._nimi + "," + this._syntymavuosi.getFullYear() + "," + this._osoite + "," + this._puhelin;
    };

    oppilas.laskeIka = function () {
        let currentYear = new Date().getFullYear();
        return currentYear - this._syntymavuosi.getFullYear();
    };

    return oppilas;
}

function varasto() {
    let laskuri = 0;
  
    function Lisaa(n) {
      laskuri += n;
    }
  
    function Tyhjenna() {
      laskuri = 0;
    }
  
    function Saldo() {
      return laskuri;
    }
  
    return {
      add: Lisaa,
      clear: Tyhjenna,
      saldo: Saldo
    };
  }







module.exports = {
    Oppilas: Oppilas,
    Oppilas_27: Oppilas_27,
    Arvosana: Arvosana,
    varasto: varasto
}