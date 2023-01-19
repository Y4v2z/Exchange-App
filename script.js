const apiKey = "eccc76bd515ac0eada9e9caf";
const url = "GET https://v6.exchangerate-api.com/v6/" + apiKey;
// Elements
const currencyOne = document.getElementById("currencyOne");
const currencyTwo = document.getElementById("currencyTwo");
const listOne = document.getElementById("listOne");
const listTwo = document.getElementById("listTwo");
const amount = document.getElementById("amount");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

fetch(url + "/codes")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })