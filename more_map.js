const friends =['tom hanks','tom crush','tom brady','tomsola'];

const flengths=friends.map(friend=>friend.length);

console.log(flengths);


const products =[
        {name:'water bottle',price:50,color:'yellow'},
        {name:'mobile phone',price:53000,color:'black'},
        {name:'smart watch',price:5000,color:'gray'},
        {name:'sticky',price:53000,color:'pink'},
        {name:'glass',price:30,color:'white'}
];


const productsName=products.map(product=>product.name)
const productsPrices=products.map(product=>product.price)

const total =productsPrices.map(productprice=>productprice+productprice);



// const sum = array.reduce(function(a, b){
//         return a + b;
//     }, 0);
console.log(productsName)
console.log(productsPrices);

for(const i of productsPrices){
        let num1=0
        const num =num1+i;
        console.log(num)
}
for (const e of productsPrices) { 
        let sum = e;
        sum +=e
        console.log(sum)
      }

     const sum11 = productsPrices.reduce((a, c) => a + c, 0);
     
     console.log(sum11)


console.log(total)

products.forEach(product=>console.log(product))