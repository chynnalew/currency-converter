export class ExchangeRate {  
  static getRates(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`)
      .then(function(response) {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
  }
  // static getRates(currency) {
  //   return new Promise(function(resolve, reject) {
  //     let request = new XMLHttpRequest();
  //     const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`;
  //     request.onload = function() {
  //       if (request.readyState === 4 || this.status === 200) {
  //         resolve(request.response);
  //       } else {
  //         reject(request.response);
  //       }
  //     };
  //     request.open("GET", url, true);
  //     request.send();
  //   });
  // }
}

export function convert(usd, rate){
  return usd/rate;
}
