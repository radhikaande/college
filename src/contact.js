// import React from 'react';

 

// 

import React,{useState} from 'react';
import './home.css';


export function Contact  (){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form inputs
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(errors).length === 0) {
      // Submit form data
      console.log('Form submitted');
    } else {
      setErrors(errors);
    }
  };

  return (
    <div> 
      <center>  
       <div id='contact'>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          id="name"
          value={name}
          
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
    </center>
    </div>

  );
};


