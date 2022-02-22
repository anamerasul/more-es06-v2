const fish={name:'king hilsha',id:54,price:9000, phone:'0125555',address:'chadpur',dress:'silver'};


// const phone=fish.phone

// const price= fish.price

// const dress =fish.dress;

// const id=fish.id
const{phone, price,dress,id}=fish

console.log(phone,price)
console.log(phone)
console.log(phone,id)
console.log(phone)
console.log(phone)
console.log(phone);

const company ={name:'GP',ceo:{id:1,name:'ajmol',food:'fushka'},
web:{work:'web dev',employee:22,framework:'react',
tech:{first:'html',second:'css', third: 'js'}}}

// const work=company.web.work;

// const framework=company.web.framework;
const {work,framework}=company.web;

const {food}=company.ceo;

const {first,third}=company.web.tech;

console.log(work,framework,food,first)

