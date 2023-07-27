import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {CONECTION} from '../../models/conection.enum';
import {Contact} from '../../models/contact.class';

const ContactForm = ({add}) => {
    
    const firstnameRef = useRef('');
    const lastnameRef = useRef('');
    const conectstateRef = useRef(CONECTION.CONECTADO);

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact (
            firstnameRef.current.value,
            lastnameRef.current.value,
            false,
            conectstateRef.current.value
        );
        add(newContact);
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                 <input ref={firstnameRef} id='inputFirstName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact First Name'/>
                 <input ref={lastnameRef} id='inputLastName' type='text' className='form-control form-control-lg' required placeholder='Contact Last Name'/>
                 <label htmlFor='selectLevel' className='sr-only'>conectstate</label>
                 <select ref={conectstateRef} defaultValue={CONECTION.DESCONECTADO} id='selectLevel'>
                    <option value={CONECTION.CONECTADO}>
                        Conectado
                    </option>
                    <option value={CONECTION.DESCONECTADO}>
                        Desconectado
                    </option>                    
                 </select>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>            
        </form>
    );
}

ContactForm.protoTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;