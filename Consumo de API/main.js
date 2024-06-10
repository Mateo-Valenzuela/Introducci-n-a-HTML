async function solicitar(){

axios.get('ttps://dolarapi.com/v1/dolares')
const lista = await fetch("")
then(response => {
  const data = response.data;
  console.log(`Dólar Oficial: ${data.dolarOficial}`);
  console.log(`Dólar Blue: ${data.dolarBlue}`);
  console.log(`Dólar Bolsa: ${data.dolarBolsa}`);
  console.log(`Dólar CCL: ${data.dolarCCL}`);
  console.log(`Dólar Mayorista: ${data.dolarMayorista}`);
  console.log(`Dólar Paralelo: ${data.dolarParalelo}`);
})
  //convertir los datos recibidos en una expresion nativa de javascript
  const lista_definitiva = await lista.json()

  lista_definitiva.forEach((element,index) => {
      console.log(`response.data`)
  });
}