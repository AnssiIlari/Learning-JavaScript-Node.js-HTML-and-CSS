function teht18(sade) {

    if (sade <= 0) {
        return 0;
    }
    else {
        return Math.PI * Math.pow(sade, 2);
    }
    }

    function teht19(taulukko) {
        let tulos = {
        min: 0,
        max: 0,
        avg: 0,
        sum: 0
      };
    
      if (taulukko.length === 0) {
        return tulos;
      }
    
      tulos.min = Math.min(...taulukko);
      tulos.max = Math.max(...taulukko);
      tulos.sum = taulukko.reduce((acc, curr) => acc + curr);
      tulos.avg = tulos.sum / taulukko.length;
    
      return tulos;
    }

    function teht20(maara, tulokset) {
        for (let i = 0; i < maara; i++) {
          let luku = i + 1;
          let potenssi = Math.pow(luku, i);
          tulokset[i] = potenssi;
        }
      }

      function teht21(pvm){

        if (pvm === "") {
            return false;
        }
    
        let isNumeric = /^[\d.]+$/.test(pvm);
    
        if (!isNumeric) {
            return false;
        }
    
        if (pvm.length !== 10) {
        return false;
      }
    
      let parts = pvm.split(".");
    
      let day = parseInt(parts[0], 10);
      if (day < 1 || day > 31) {
        return false;
      }
      let month = parseInt(parts[1], 10);
      if (month < 1 || month > 12) {
        return false;
      }
      let year = parseInt(parts[2], 10);
      if (year < 1900 || year > 2020) {
        return false;
      }
    
      return true;
        
    }





module.exports = {
    teht18 : teht18,
    teht19 : teht19,
    teht20 : teht20,
    teht21 : teht21
}