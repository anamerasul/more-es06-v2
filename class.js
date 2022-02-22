class Support {
        name;
        designation='support web dev'

        address=' ';
        constructor(name,address){
                this.name=name
                this.address=address
        }
        startSession(){
                console.log( this.name,'start a support session')
        }

}

const Amir =new Support('amir' ,'bd')
Amir.startSession()

console.log(Amir);


const salman=new Support('salam','uk');
salman.startSession()

console.log(salman)