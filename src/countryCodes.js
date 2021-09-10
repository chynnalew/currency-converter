export class CountryCodes {
  static getCodes() {
    return fetch(`https://openexchangerates.org/api/currencies.json`)
      .then(function(response) {
        if(!response.ok){
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
  }
}