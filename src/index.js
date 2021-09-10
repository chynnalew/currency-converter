import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {ExchangeRate, convert} from './currency.js';
import {CountryCodes} from './countryCodes'

$(document).ready(function() {
  CountryCodes.getCodes()
    .then(function(response) {
      Object.keys(response).forEach(key => {
        let value = response[key];
        $('#codes2').append(`${key}: ${value} <br>`);
        console.log(key, value);
      });
    });
  
  $('#convert1').click(function() {
    let currency = $('#currency').val();
    ExchangeRate.getRates(currency)
      .then(function(response) {
        const body = response;
        let rate = body.conversion_rates.USD;
        let usd = $('#userNumber1').val();
        let newVal = convert(usd, rate);
        $("#conversion1").html(newVal);
      });
  });
  $('#convert2').click(function() {
    let currency = $('#currency2').val();
    ExchangeRate.getRates(currency)
      .then(function(response) {
        const body = response;
        let rate = body.conversion_rates.USD;
        let usd = $('#userNumber2').val();
        let newVal = convert(usd, rate);
        $("#conversion2").html(newVal);
      });
  });
});
