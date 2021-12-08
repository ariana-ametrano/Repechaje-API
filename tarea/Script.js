const getApi = async () => {
  const requestAPI = await fetch('https://api.covid19api.com/summary'); // Por defecto hace un GET 
  return (data = requestAPI.json());
};

// fetch (GET)


const casosNuevos = async () => {
  const covid = await getApi();  // llama a la funcion getApi que con el fetch obtiene todos los datos de esa Api 
  const searchCountry = covid.Countries.find(country => country.Country === "Uruguay");
  const html = `
    <ul>
      <li>Pais: ${searchCountry.Country}</li>
      <li>Nuevos casos confirmados: ${searchCountry.NewConfirmed}</li>
      <li>Total confirmados: ${searchCountry.TotalConfirmed}</li>
      <li>Muertes nuevas: ${searchCountry.NewDeaths}</li>
      <li>Total muertes: ${searchCountry.TotalDeaths}</li>
    </ul>
  `;
  console.log(searchCountry)

  document.getElementById("conteiner").innerHTML = html;
}
casosNuevos();