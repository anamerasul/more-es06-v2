// declare variable based on the name of object properties

const myObject={x:2,y:50,z:600,a:25,b:68};
const {x,b}=myObject;

console.log(x,b);

console.log("myObject.p",myObject?.p?.q)


// destrucing

const [p,q]=[2,7,67,67]

// console.log(p,q)

const [best,faltu]=["momotaj","poroshi"];

console.log(best,faltu);

const {sky,color,red} ={sky:'blue',soil:'mati',color:'red',money:500};


const company ={name:'GP',ceo:{id:1,name:'ajmol',food:'fushka'},
web:{work:'web dev',employee:22,framework:'react',
tech:{first:'html',second:'css', third: 'js'}}}

console.log(company?.web?.tech?.third)
console.log(company?.backend?.tech?.third)


