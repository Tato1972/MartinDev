import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../models/contact.class';

//importamos la hoja de estilos de task.scss
import '../styles/contact.scss';
import { CONECTION } from '../models/conection.enum';


const ContactComponent = ({contact, conect, remove }) => {



    useEffect(() => {
        console.log('Created Contact');
        return () => {
            console.log(`Contact: ${contact.name} is going to unmount`);
        };
    }, [contact]);

   
    /**
     * Function that returns a Badge depending on the state of the contact
     */
    function contactStateBadge(){
        switch (contact.conect) {
            case CONECTION.CONECTADO:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {contact.conect}
                        </span>
                    </h6>)
            case CONECTION.DESCONECTADO:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {contact.conect}
                        </span>
                    </h6>)
                default:
                break;
        }
    }
    

    /**
     * Function that returns icons depending if it complete 
     */
    function contactStateIcon(){
        if(contact.conected){
            return(<i onClick={() => conect (contact)} className='bi-toggle-on contact-action' style={{color:'green'}}></i>)
        }else{
            return(<i onClick={() => conect (contact)} className='bi-toggle-off contact-action' style={{color: 'grey'}}></i>)
        }
    }
    
    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.firstname}</span>
            </th>
            <td className='align-middle'>
                <span>{contact.lastname}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.conected}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.conectstate}</span>
            </td>
            <td className='align-middle'>
                {/*TODO Sustituir por un badge */}
                {/*<span>{task.level}</span>*/}
                {/*Execution of function to return badge element */}
                {contactStateBadge()}
            </td>
            <td className='align-middle'>
                {/*TODO Sustituir por Iconos */}
                {/*{task.completed ? 
                  (<i className='bi-toggle-on' style={{color:'green'}}></i>)
                  : (<i className='bi-toggle-off' style={{color: 'red'}}></i>)
                }*/}
                {/*Execution of function to return icon element */}
                {contactStateIcon()} 
                <i className='bi-trash contact-action' style={{color:'tomato'}} onClick={() => remove(contact)}></i>            
            </td>
        </tr>
        
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    conect: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default ContactComponent;
