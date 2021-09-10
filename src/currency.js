export class ExchangeRate {  
  static getRates(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`)
      .then(function(response) {
        if(!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error) {
        alert(error);
      });
  }
}

export function convert(usd, rate){
  return usd/rate;
}
