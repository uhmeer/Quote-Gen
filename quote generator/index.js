// const quote = 'It is absolutely necessary to keep improving';
// document.querySelector('h1').textContent = quote;


let quote = 'Because if you do not, you will remain stagnant';
const title =  document.querySelector('h1');
const button = document.querySelector('button');

function changeQuote() {
    title.textContent = quote
}

button.addEventListener('click', changeQuote)


