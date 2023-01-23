const apiKey = "eccc76bd515ac0eada9e9caf";
const url = "https://v6.exchangerate-api.com/v6/" + apiKey;
const currencyOne = document.getElementById("currencyOne");
const currencyTwo = document.getElementById("currencyTwo");
const listOne = document.getElementById("listOne");
const listTwo = document.getElementById("listTwo");
const amount = document.getElementById("amount");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");
async function getCodes() {
    try {
        const response = await fetch(url + "/codes");
        if (!response.result == "success") {
            throw new Error("request was not successful")
        }
        const data = await response.json();
        const items = await data.supported_codes;
        let option;
        for (let item of items) {
            option += `<option value="${item[0]}">${item[1]}</option>`;
        }
        listOne.innerHTML = option;
        listTwo.innerHTML = option;
    }
    catch (err) {

    }
};
getCodes();
calculate.addEventListener("click", () => {
    const currencyTypeOne = currencyOne.value;
    const currencyTypetwo = currencyTwo.value;
    const exchangeAmount = amount.value;
    fetch(url + "/latest/" + currencyTypeOne)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const total = (data.conversion_rates[currencyTypetwo] * exchangeAmount).toFixed(3);
            result.innerHTML = `
            <div class="card border-primary">
                <div class="card-body text-center fs-2">
                    ${exchangeAmount} ${currencyTypeOne} = ${total} ${currencyTypetwo}
                </div>
                <div class="card-footer text-muted text-center">
                    1 ${currencyTypeOne}= ${data.conversion_rates[currencyTypetwo]} ${currencyTypetwo}
                </div>
            </div>
            `;
        })
});
// fetch(url + "/codes")
//     .then(res => res.json())
//     .then(data => {
//         const items = data.supported_codes;
//         let option;
//         for (let item of items) {
//             option += `<option value="${item[0]}">${item[1]}</option>`
//         }
//         listOne.innerHTML = option;
//         listTwo.innerHTML = option;
//     });
// calculate.addEventListener("click", () => {
//     const currencyTypeOne = currencyOne.value;
//     const currencyTypetwo = currencyTwo.value;
//     const exchangeAmount = amount.value;
//     fetch(url + "/latest/" + currencyTypeOne)
//         .then(res => res.json())
//         .then(data => {
//             const total = (data.conversion_rates[currencyTypetwo] * exchangeAmount).toFixed(3);
//             result.innerHTML = `
//             <div class="card border-primary">
//                 <div class="card-body text-center fs-2">
//                     ${exchangeAmount} ${currencyTypeOne} = ${total} ${currencyTypetwo}
//                 </div>
// <div class="card-footer text-muted text-center">
//     1 ${currencyTypeOne}= ${data.conversion_rates[currencyTypetwo]} ${currencyTypetwo}
// </div>
//             </div>
//             `;
//         })
// })
