import { useEffect, useState } from "react"
import { Alert, Col, Row } from "react-bootstrap";



export const Newsletter =({onValidated , status , message}) =>{

    const [email , setEmail] = useState('');

    useEffect(()=>{
        if(status === 'success') clearFields();
    },[status])

    const handleSubmit= (e) =>{
        e.preventDefault();
        email&&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    }

    const clearFields =()=>{
        setEmail('')
    }
    return(
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col>
                    <h3>See My Projects At once & leave Here Your E-mail Address</h3>
                    {status === 'sending' && <Alert>Sending...</Alert>}
                    {status === 'error' && <Alert>{message}</Alert>}
                    {status === 'success' && <Alert>{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                      <form onSubmit={handleSubmit}>
                        <div className="new-email-bx">
                            <input value={email} type="email" onChange={(e) =>setEmail(e.target.value)} placeholder="Email Address"/>
                            <button type="submit">Submit</button>
                        </div>
                      </form>
                    </Col>
                </Row>

            </div>
        </Col>
    )
}