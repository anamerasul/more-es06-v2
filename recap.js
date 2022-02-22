// let and const
const hubby='omar sani';
let phone ='iphone 15';

phone ="samgsang galxy s17"

// 2 default parameter or three dots

function maxNumber(array=[]){

        const max =Math.max(...array);
        return max
}

const BigNumber=maxNumber();
console.log(BigNumber)
//3. template string
const myNotes=`I am mojnu of ${hubby} I do not have a laili my phone is ${phone}`

console.log(myNotes);


// 4 arrow function
const square =x=>x*x

console.log(square(4))