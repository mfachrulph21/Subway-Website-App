import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Login() {
  return (
    <div >
    <Form className="w-50 p-3 m-auto rounded-4 mt-5" >
        <h1 className='text-center mb-4' >Login</h1>
        <div>
            <img src={process.env.PUBLIC_URL + '/assets/subway-header-login.jpg'}
            width="725"
            height="251"/>
        </div>

      <Row className="mb-3 mt-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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