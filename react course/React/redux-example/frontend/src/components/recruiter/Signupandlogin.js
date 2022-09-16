import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

 
function ProductCreate() {
    const [phoneNumber, setTitle] = useState('');
  
 
    const navigate = useNavigate();
 
    const submit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/api/v1/recruiter/sign-in', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({phoneNumber})
        }).then(() => navigate.push('/admin/products'));
    }
 
    return (
      
                 <form onSubmit={submit}>
                <label>Title</label>
                <input type="text" name="title"
                onChange={e => setTitle(e.target.value)}
                 />            
                <button type="submit">Add Product</button>
            </form>
    
    )
}
 
export default ProductCreate

