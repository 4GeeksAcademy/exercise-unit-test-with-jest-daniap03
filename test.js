const {sum,fromEuroToDollar,fromDollarToYen,fromYenToLibra} = require('./app.js');

test('si sumamos 14 + 9 debe de ser 23',() =>{
    let total = sum(14,9);
    expect(total).toBe(23);
    
}); 

test ("Un euro deberia ser 1.07 dolares", () =>{
    let total = fromEuroToDollar(7);
    expect(total).toBe(7.49);
})
test("Un dolar deberia ser 146,26 yenes",() =>{
    let total = fromDollarToYen(1)
    expect(total).toBe(146.26)
})
test("Un yen deberia de ser 0.005 pounds",()=>{
    let total = fromYenToLibra(1000)
    expect(total).toBe(5.559)   
})