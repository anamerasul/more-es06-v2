class TeamMember{

        name;
        designation;

        address=' ';
        constructor(name,designation,address){
                this.name=name
                this.designation=designation
                this.address=address
        }

}

class Support extends TeamMember{

        groupSupportTime;
        constructor(name,designation,address,time){
                super(name,designation,address);
                this.groupSupportTime=time;
        }
      
        startSession(){
                console.log( this.name,'start a support session')
        }

}


class  StudentCare extends TeamMember {
      

        buildAroutine(studentName){
                console.log(this.name,'give a routine ',studentName )
        }
}
class Neptunedev extends TeamMember{ 

        codeEditor;
        constructor(name,designation,address,editor){
                super(name,designation,address)
                this.codeEditor=editor;
        }

        releaseApp(version){
                console.log(this.name,'give a version ',version )
        }
}



const Amir =new Support('amir' ,'bd')
// Amir.startSession()

// console.log(Amir);


const salman=new Support('salam','uk');
// salman.startSession()

// console.log(salman)

const srk =new Support('srk','support web dev','eng','1132');
srk.startSession()
console.log(srk)
const Alia= new StudentCare('alia' ,'student care dev','india');

console.log(Alia);


const Ash=new Neptunedev('ash','neptune app dv','tamil', 'atom')
Ash.releaseApp(1.5)
console.log(Ash)


// Prototypical inheritance
console.log(Ash.name)