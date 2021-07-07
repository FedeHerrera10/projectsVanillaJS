const balance = document.querySelector('#result');
const resultChange = document.querySelector('#result-change');
const swap = document.querySelector('#swap');
const inputOne = document.querySelector('#currency-one-value');
const inputTwo = document.querySelector('#currency-two-value');
const selectOne = document.querySelector('#currency-one');
const selectTwo = document.querySelector('#currency-two');


window.addEventListener('DOMContentLoaded' , () => {
    getCurrency()
})

function getCurrency(){

    const currency_one = selectOne.value;
    const currency_two = selectTwo.value

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      
    const rate = data.rates[currency_two];
    balance.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
    inputTwo.value = (inputOne.value * rate).toFixed(2);
    });
}

inputOne.addEventListener('change',getCurrency);
inputTwo.addEventListener('change',getCurrency);
selectOne.addEventListener('change',getCurrency);
selectTwo.addEventListener('change',getCurrency);

swap.addEventListener('click' , () => {
    const aux = selectOne.value
    selectOne.value = selectTwo.value;
    selectTwo.value  = aux;
    getCurrency();
})

