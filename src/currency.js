export class ExchangeRate {  
  static getRates(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`)
      .then(function(response) {
        if(response.status === 404) {
          throw Error("PLEASE ENTER A VALID CURRENCY");
        } else 
        if(!response.ok){
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error) {
        document.getElementById('errors').innerText = error;
      });
  }
}

export function convert(usd, rate){
  return usd/rate;
}
