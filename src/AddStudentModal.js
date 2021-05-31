/*jshint esversion: 6 */
import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
import {successAlert, successEdit} from './Alerts';

export class AddStudentModal extends Component{

    
    constructor(props){
        super(props);
        this.state={deps:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    

    componentDidMount(){
        fetch("https://courseapibb.azurewebsites.net/api/course/",)
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://courseapibb.azurewebsites.net/api/student/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
             
                StudentName:event.target.StudentName.value,
                StudentSecondName:event.target.StudentSecondName.value,
                Course:event.target.CourseName.value,
                DateOfJoining:event.target.DateOfJoining.value,
                Photo:this.photofilename

            })
        })
        .then(res=>res.json())
        .then((result)=>{
            successAlert();
        },
        (error)=>{
            alert('Failed');
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

        fetch("http://localhost:5000/api/student/photo/",{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then((result)=>{
            this.imagesrc='C://Users//batko//Downloads//CourseAPI//CourseAPI/Photos/atrapa%20chlodnicy.jpg';
            // process.env.REACT_APP_PHOTOPATH+result
        },
        (error)=>{
            alert('Failed');
        })
        print(this.imagesrc);
    }

    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size=""
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Dodaj studenta
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        
            <Col sm={12}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="StudentName">
                        <Form.Label>Imię studenta:</Form.Label>
                        <Form.Control type="text" name="StudentName" required 
                        placeholder="Wpisz imię studenta..."/>
                    </Form.Group>

                    <Form.Group controlId="StudentSecondName">
                        <Form.Label>Nazwisko studenta:</Form.Label>
                        <Form.Control type="text" name="StudentSecondName" required 
                        placeholder="Wpisz imię studenta..."/>
                    </Form.Group>

                    <Form.Group controlId="CourseName">
                        <Form.Label>Nazwa kursu:</Form.Label>
                        <Form.Control as="select">
                        {this.state.deps.map(dep=>
                            <option key={dep.CourseId}>{dep.CourseName}</option>)}
                        </Form.Control>
                    </Form.Group>

                     

                    <Form.Group controlId="DateOfJoining">
                        <Form.Label>Data dołączenia:</Form.Label>
                        <Form.Control 
                        type="date"
                        name="DateOfJoining"
                        required
                        placeholder="DateOfJoining"
                        />
                       
                        
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Dodaj studenta
                        </Button>
                    </Form.Group>
                </Form>
            </Col>

            {/* <Col sm={6}>
                <Image width="200px" height="200px" src={this.imagesrc}/>
                <input onChange={this.handleFileSelected} type="File"/>
            </Col> */}
        
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Zamknij</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}