import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';


function Forma() {

     const [formasDati, setFormasDati] = useState("");
     const [emailField, setemailField] = useState("");
     const [textareaField, settextareaField] = useState("");
     const [resp, setResp] = useState();

     const handlesubmit =  (e)=>{
        e.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body:JSON.stringify({
                        email:emailField,
                        message:textareaField
                    }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            
            setemailField("")
            settextareaField("")
        });

     }   



  return (
    <Form onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onInput={
            (e)=>{
                setemailField(e.target.value)
            }
        }
        value={emailField}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control 
            as="textarea" 
            rows={3} 
            onInput={
                (e)=>{
                    settextareaField(e.target.value)
                }   
            }
        value={textareaField}
        />
      </Form.Group>

       <Button as="input" type="submit" value="Submit" />
        {console.log(emailField,textareaField)}
    </Form>
   
  );
}

export default Forma;