export class ExchangeRate {  
  static getRates() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest(currency);
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`;
      request.onload = function() {
        if (request.readyState === 4 || this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
