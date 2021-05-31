import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import {successAlert, successEdit} from './Alerts';
export class EditKursModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://courseapibb.azurewebsites.net/api/course/'+ this.props.kursid,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                CourseId:event.target.CourseId.value,
                CourseName:event.target.CourseName.value,
                
            })
        })
        .then(res=>res.json())
        .then(
            (result)=>{
            console.log('ok');
        },
        (error)=>{
            successEdit(this.props.onHide);
            
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
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Edytuj kurs
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="CourseId">
                        <Form.Label>ID kursu</Form.Label>
                        <Form.Control type="text" name="CourseId" required
                        disabled
                        defaultValue={this.props.kursid} 
                        placeholder="CourseId"/>
                    </Form.Group>

                    <Form.Group controlId="CourseName">
                        <Form.Label>CourseName</Form.Label>
                        <Form.Control type="text" name="CourseName" required 
                        defaultValue={this.props.kursname}
                        placeholder="CourseName"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Edytuj kurs
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}