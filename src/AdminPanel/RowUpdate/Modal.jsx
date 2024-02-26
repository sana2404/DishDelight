import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ closeModal, onSubmit, defaultValue }) => {

    const [formState , setFormState] = useState(defaultValue || {
        customer: '',
        description: '',
        status: 'pending',
    });

    const [errors, setErrors] = useState("");

    const validateForm = () => {
        if(formState.customer && formState.description && formState.status){
            setErrors("");
            return true;
        }else{
            let errorFields = [];
            for(const[key, value] of Object.entries(formState)){
                if(!value){
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(", "));
            return false;
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validateForm()) return;
        onSubmit(formState);
        closeModal();
    };

    return (
        <div className='modal-container'
         onClick={(e) => { 
            if(e.target.className === 'modal-container') closeModal()
        }}>
            <div className="modal">
                <form>
                    <div className='form-group'>
                        <label htmlFor='customer'>Customer</label>
                        <input name='customer' value={formState.customer} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='desciption'>Desciption</label>
                        <textarea name='description' value={formState.description} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='status'>Status</label>
                        <select name='status' value={formState.status} onChange={handleChange}>
                            <option value="delivered">Order Delivered</option>
                            <option value="pending">Order Pending</option>
                        </select>
                    </div>
                    {errors && <div className='error'>{`Please include: ${errors}`}</div>}
                    <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Modal
