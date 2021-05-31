import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import {successAlert, successEdit} from './Alerts';
export class AddKursModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://courseapibb.azurewebsites.net/api/course/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                
                CourseName:event.target.CourseName.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            successAlert();
        },
        (error)=>{
            alert('failed');
        })
    }

    
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Dodaj kurs
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="CourseName">
                        <Form.Label>Nazwa kursu</Form.Label>
                        <Form.Control type="text" name="CourseName" required 
                        placeholder="Podaj nazwę kursu... "/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Dodaj kurs
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Zamknij</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}