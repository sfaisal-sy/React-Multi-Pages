import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button'

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      phone,
      subject,
      message,
    });

    alert('FORM SUBMITTED SUCCESSFULLY');

    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
    
  };


  return (
    <>
        <div style={{padding: '30px'}}>
            <h1>Contact us</h1>

        <form onSubmit={handleSubmit}>
          <input className="form-control"
            type='text'
            placeholder='Full NAME'
            value={name}
            onChange={(e) => setName(e.target.value)} 
            />
            <br /> <br />

            <input className="form-control"
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <br/><br/>

              <input className="form-control"
                type='text'
                placeholder='Phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
                <br/><br/>

                <input className="form-control"
                  type='text'
                  placeholder='Subject'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  />
                  <br/><br/>

                  <textarea className="form-control"
                    placeholder='Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                    <br/><br/>

                    <Button variant="primary" type='submit'>Submit</Button>

        </form>

        </div>
    </>
  )
}

export default Contact
