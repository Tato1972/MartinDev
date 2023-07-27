import { CONECTION } from "./conection.enum";

export class Contact {
    firstname ='';
    lastname = '';
    conected= true;
    conectstate = CONECTION.DESCONECTADO

    constructor(firstname,lastname, conected, conectstate){
        this.firstname = firstname;
        this.lastname = lastname;
        this.conected= conected;        
        this.conectstate  = conectstate 
    }
}