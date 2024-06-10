const axios = require('axios');

axios.get('https://dolarapi.com/v1/dolares')
  .then(response => {
    const data = response.data;
    console.log(`Dólar Oficial: ${data.dolarOficial}`);
    console.log(`Dólar Blue: ${data.dolarBlue}`);
    console.log(`Dólar Bolsa: ${data.dolarBolsa}`);
    console.log(`Dólar CCL: ${data.dolarCCL}`);
    console.log(`Dólar Mayorista: ${data.dolarMayorista}`);
    console.log(`Dólar Paralelo: ${data.dolarParalelo}`);
  })
  .catch(error => {
    console.error(error);
  });