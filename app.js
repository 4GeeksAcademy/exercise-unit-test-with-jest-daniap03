const sum = (a,b) =>{
    return a + b
}
console.log(sum(7,3));




let oneEurols = {
    "JPY":156.5,
    "USD":1.07,
    "GBP":0.87,
}
function fromDollarToYen(montoEnDolares) {
    let usdToYen = oneEurols["JPY"] / oneEurols["USD"];
    let result = montoEnDolares * usdToYen;
    return Number(result.toFixed(2));
}

function fromEuroToDollar(montoEnEuros) {
    let result = montoEnEuros * oneEurols["USD"];
    return Number(result.toFixed(3));
}
function fromYenToLibra(montoEnLibras) {
    let yenToLibra = oneEurols["GBP"] / oneEurols["JPY"];
    let result = montoEnLibras * yenToLibra
    return Number(result.toFixed(3));
}

module.exports ={sum,fromEuroToDollar,fromDollarToYen,fromYenToLibra};