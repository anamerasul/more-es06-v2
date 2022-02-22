const numbers =[4,6,8,10];

const output2=[];

const doubleIt=number=>number*2;

// function doubleOld(number){
//         return number*2;
// }

for(const number of numbers){
        const result = doubleIt(number);
        output2.push(result);

}

// console.log(output2);

// loop through each element 
// for each element call provide function?

// result for each element will pass


// const output=numbers.map(doubleIt);
const output=numbers.map(x=>x*2);

console.log(output)

const squre=numbers.map(x=>x*x);

console.log(squre)






// console.log(doubleIt(numbers))
