const numbers =[5,13,7,41,29,79,30,5,2];

const BigNumber=numbers.filter(number=>number>20);
const smallNumber=numbers.filter(number=>number<20);



console.log(BigNumber);

console.log(smallNumber);


const products =[
        {name:'water bottle',price:50,color:'yellow'},
        {name:'mobile phone',price:53000,color:'black'},
        {name:'smart watch',price:5000,color:'gray'},
        {name:'sticky',price:53000,color:'pink'},
        {name:'glass',price:30,color:'white'}
];

const expenses =products.filter(product=>product.price>10000)

// console.log(expenses)


// const  blacks =products.filter(product=>product.color=='black');
const  blacks =products.filter(product=>product.color=='blacks');

console.log(blacks)


const whiteItm=products.find(product=>product.color=='white');

console.log(whiteItm)