import React from 'react';
import { useContext,useState } from 'react';
import {tenantsContext} from "../../context/tenantContext";
import { Form, ButtonToolbar,Button} from 'rsuite';



const AddTenants = () => {
  const {addTenants} = useContext(tenantsContext)
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const saveTenant = () => {
    if(!formValue.phone)
    {
      alert("Телефон обьязательное поле")
      return
    }
    addTenants(formValue);
  }

  return (
    <div className="form__addClient">
          <Form  onChange={setFormValue} formValue={formValue}>
              <Form.Group controlId="name">
                <Form.ControlLabel>Username:</Form.ControlLabel>
                <Form.Control name="name" />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.ControlLabel>Email:</Form.ControlLabel>
                <Form.Control name="email" type="email" />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.ControlLabel>Phone:</Form.ControlLabel>
                <Form.Control name="phone" type="text" autoComplete="off" />
              </Form.Group>
              <Form.Group>
                <ButtonToolbar style={{textAlign:"center"}}>
                  <Button appearance="primary" onClick={saveTenant}>Submit</Button>
                </ButtonToolbar>
              </Form.Group>
            </Form>
    </div>

    )
};

export default AddTenants;