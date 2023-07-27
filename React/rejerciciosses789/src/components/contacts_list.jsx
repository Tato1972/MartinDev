import React, {useState, useEffect} from 'react';
import { CONECTION } from '../models/conection.enum';
import { Contact } from '../models/contact.class';
import ContactComponent from '../components/contact';

// importamos la hoja de estilos de task.scss
import '../styles/contact.scss'
import ContactForm from '../components/form/contacts_form';

const ContactListComponent = () => {

    const defaultContact1 = new Contact('Juan', 'Lopez', true, CONECTION.CONECTADO);
    const defaultContact2 = new Contact('Pedro', 'Perez', true,  CONECTION.CONECTADO);
    const defaultContact3 = new Contact('Miguel', 'Ruiz', false, CONECTION.DESCONECTADO);

    //Estado del componente
    //const [tasks, setTasks] = useState(defaultTask);
    const [contacts, setContacts] = useState([defaultContact1, defaultContact2,defaultContact3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente

    useEffect(() => {
        console.log('Contact State has been modified');
        setLoading(false);
        return () => {
            console.log('ContactList component is going to unmount...')
        };
    }, [contacts]);

    function conectContact(contact){
        console.log('Conect this Contact:', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].conected = !tempContacts[index].conected;
        setContacts(tempContacts);
    }

    function deleteContact(contact){
        console.log('Delete this Contact:', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        setContacts(tempContacts);
    }  

    function addContact(contact){
        console.log('Add this Contact:', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    return (
        <div>
             <div className= 'col-12'>
                <div className='card'>
                   {/*Card Header (title) */}
                   <div className='card-header p-3'>
                    <h5>
                         Your Contacts:
                    </h5>
                   </div>
                   {/*Card Header (content) */}
                   <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position:'relative', height:'400px'}}>
                        <table>
                            <thead>
                               <tr>
                                   <th scope='col'>FirstName</th>
                                   <th scope='col'>LastName</th>
                                   <th scope='col'>Conect</th>
                                   <th scope='col'>Action</th>
                                   
                                </tr>
                            </thead>
                                <tbody>                                                
                                    { contacts.map((contact, index) => {
                                           return(
                                                  <ContactComponent key={index} contact={contact} conect={conectContact} remove={deleteContact}></ContactComponent>
                                            )
                                       }
                                    )}                               
                                </tbody>
                        </table>
                   </div>                  
                </div>                 
            </div>
            <ContactForm add={addContact}></ContactForm>                     
        </div>
    );
};


export default ContactListComponent;