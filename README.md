# Currency Converter

#### This is a project created for Epicodus that converts USD into five other currencies.

#### By Chynna Lew

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript 
* Jquery
* Node Package Manager
* Webpack
* Jest
* ESLint

## Description

This application accepts a user input USD amount and returns one of five different exchange rate currencies (based on a user selected dropdown menu). The user can also view the exchange rate in any currency contained in the API by entering the abbreviated currency name in an input field. The purpose of this project is to demonstrate the following skills:
* properly making API calls
* parsing data from an API response
* handling errors and displaying messages when there are no results returned

## Setup/Installation Requirements

* Download or clone [this](https://github.com/chynnalew/currency-converter) repository to your local machine
* Open the Currency-Converter folder in VS Code and open the terminal
* In the terminal, run the command '$ npm install' to install the needed plugins and packages
* Create a .env file in the root directory with the terminal command '$ touch .env'
* Go to the [ExchangeRate-API](https://www.exchangerate-api.com/) site. Input your email address and click the "Get Free Key" button.
* Follow the instructions to get a key for the API, then add it to the .env file in the format: API_KEY=yourKeyHere
* The key you receive will replace 'yourKeyHere'. It is very important that your key is preceded by the 'API_KEY=' text.
* Save the new file, then run the command '$ npm run build' in the terminal to build the webpack bundle
* To view the application, either run the command '$ npm run start', or open the index.html file located in the dist folder.

## Known Bugs

* _Any known issues_
* _should go here_

## License
[MIT](https://opensource.org/licenses/MIT) 2021

## Contact Information
Chynna Lew <chynnalew@yahoo.com>