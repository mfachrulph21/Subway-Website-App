import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  function changeHandler(e) {
    let data = e.target.name
    let value = e.target.value

    let newUser = {
      ...user
    }

    newUser[data] = value
    setUser(newUser)
  }

  function submitLogin(e) {
    e.preventDefault()

    //

  }

  return (
    <div className='div-login'>
    <Form className="w-50 p-3 m-auto rounded-4 mt-5" onSubmit={submitLogin} >
        <h1 className='text-center mb-4' >Login</h1>
        <div>
            <img src={process.env.PUBLIC_URL + '/assets/subway-header-login.jpg'}
            width="725"
            height="251"/>
        </div>

      <Row className="mb-3 mt-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" value={user.email} onChange={changeHandler} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={user.password}  onChange={changeHandler}/>
        </Form.Group>
      </Row>
      <Button className='buttonSubmit'variant="success" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Login;