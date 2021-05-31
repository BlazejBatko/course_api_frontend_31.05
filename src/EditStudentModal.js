import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';
import {successAlert, successEdit} from './Alerts';
export class EditStudentModal extends Component{
    constructor(props){
        super(props);
        this.state={deps:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    photo = "anonymous.png";
    imagesrc = process.env.REACT_APP_PHOTOPATH+this.photo;

    componentDidMount(){
        fetch('https://courseapibb.azurewebsites.net/api/course/')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }
//https://courseapibb.azurewebsites.net/api/student/

    handleSubmit(event){
        event.preventDefault();
        fetch('https://courseapibb.azurewebsites.net/api/student/' + this.props.studentid,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                StudentId:event.target.StudentId.value,
                StudentName:event.target.StudentName.value,
                StudentSecondName:event.target.StudentSecondName.value,
                Course:event.target.CourseName.value,
                DateOfJoining:event.target.DateOfJoining.value,
                Photo:this.photofilename

            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            successEdit();
        })
    }


    handleFileSelected(event){
        event.preventDefault();
        this.photo=event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(process.env.REACT_APP_API,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then((result)=>{
            this.imagesrc=process.env.REACT_APP_PHOTOPATH+result;
        },
        (error)=>{
            alert('Failed');
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
            Edit Student
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="StudentId">
                        <Form.Label>ID Studenta</Form.Label>
                        <Form.Control type="text" name="StudentId" required 
                        placeholder={this.props.studentid}
                        disabled
                        defaultValue={this.props.studentid}/>
                    </Form.Group>

                    <Form.Group controlId="StudentName">
                        <Form.Label>Imię studenta</Form.Label>
                        <Form.Control type="text" name="StudentName" required 
                        defaultValue={this.props.studentname}
                        placeholder={this.props.studentname}/>
                    </Form.Group>

                    <Form.Group controlId="StudentSecondName">
                        <Form.Label>Nazwisko studenta</Form.Label>
                        <Form.Control type="text" name="StudentSecondName" required 
                        defaultValue={this.props.studentsname}
                        placeholder={this.props.studentsname}/>
                    </Form.Group>

                    <Form.Group controlId="CourseName">
                        <Form.Label>Nazwa kursu</Form.Label>
                        <Form.Control as="select" defaultValue={this.props.Course}>
                        {this.state.deps.map(dep=>
                            <option key={dep.CourseId}>{dep.CourseName}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="DateOfJoining">
                        <Form.Label>Data dołączenia</Form.Label>
                        <Form.Control 
                        type="date"
                        name="DateOfJoining"
                        required
                        placeholder="dateofjoining"
                        defaultValue={this.props.dateofjoining}
                        />
                       
                        
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Edytuj studenta
                        </Button>
                    </Form.Group>
                </Form>
            </Col>

            <Col sm={6}>
                <Image width="200px" height="200px" 
                src={process.env.REACT_APP_PHOTOPATH+this.props.photo}/>
                <input onChange={this.handleFileSelected} type="File"/>
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