import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {ExchangeRate, convert} from './currency.js';


$(document).ready(function() {
  $('#convert1').click(function() {
    let currency = $('#currency').val();
    let promise = ExchangeRate.getRates(currency);
    promise.then(function(response) {
      const body = JSON.parse(response);
      let rate = body.conversion_rates.USD;
      let usd = $('#userNumber1').val();
      let newVal = convert(usd, rate);
      $("#conversion1").html(newVal);
    })
  });
  $('#convert2').click(function() {
    let currency = $('#currency2').val();
    let promise = ExchangeRate.getRates(currency);
    promise.then(function(response) {
      const body = JSON.parse(response);
      let rate = body.conversion_rates.USD;
      let usd = $('#userNumber2').val();
      let newVal = convert(usd, rate);
      $("#conversion2").html(newVal);
    })
  });
});

  