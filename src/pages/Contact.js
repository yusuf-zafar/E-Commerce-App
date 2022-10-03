
import './Contact.css'
import { useState } from 'react'

function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    description: ''
  });

  
  

  const handleChange = e =>{
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(contactForm.name==='' || contactForm.email==='' || contactForm.description===''){
      alert("All fields are required")
    }else{
    alert("Name: " +contactForm.name+ ", Email: " +contactForm.email+ ", Description: " +contactForm.description)
    setContactForm({
      name: '',
    email: '',
    description: ''
    })}
  }


  return (
    <div>
      <h2 style={{'textAlign': 'center'}}>Contact Us</h2>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name: </label>
          <input name='name' type='text' id='name' value={contactForm.name} onChange={handleChange}/>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email: </label>
          <input name='email' type='email' id='email' value={contactForm.email} onChange={handleChange}/>
        </div>
        <div className='form-control'>
          <label htmlFor='description'>Description: </label>
          <textarea id='description' name='description' value={contactForm.description} onChange={handleChange}/>
        </div>
        <button className='btn btn-primary'>Submit</button>
        <br/>
      </form>
      
    </div>
  )
}

export default Contact