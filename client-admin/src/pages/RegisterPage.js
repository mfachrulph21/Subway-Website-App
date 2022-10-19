import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: ""
  })

  function changeHandler(e) {
    e.preventDefault()

    const data = e.target.name
    const value = e.target.value

    const newUser = {
      ...user,
    }

    newUser[data] = value
    setUser(newUser)
  }

  function submitRegister(e) {
    e.preventDefault()

  }

  return (
    <div className='div-register'>
    <Form className="w-50 p-3 m-auto rounded-4" onSubmit={submitRegister} >
        <h1 className='text-center mb-4' >Register New Admin</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" name="username" value={user.username} onChange={changeHandler} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Phone Number" name="phoneNumber" value={user.phoneNumber} onChange={changeHandler} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" value={user.email} onChange={changeHandler}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={changeHandler}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Address" name="address" value={user.address} onChange={changeHandler} />
      </Form.Group>
      <Button className='buttonSubmit'  variant="success" type="submit">
        Submit
      </Button>
      <Button className='buttonCancelRegister'  variant="light" type="button" onClick={() => navigate("/") } >
        Cancel
      </Button>
    </Form>
    </div>
  );
}

export default Register;