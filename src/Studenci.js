/*jshint esversion: 6 */
import React, { Component } from 'react';
import {ButtonToolbar, Table} from 'react-bootstrap';
import Swal from 'sweetalert2';


import {Button} from 'react-bootstrap';
import {AddStudentModal} from './AddStudentModal';
import {EditStudentModal} from './EditStudentModal'


export class Studenci extends Component{


    constructor(props){
        super(props);
        
      this.state={students:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://courseapibb.azurewebsites.net/api/student/')
        .then(response=>response.json())
        .then(data=>{
            this.setState({students:data});
        });

    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
        //  console.log(this.state.students[0].StudentName)
    }

    deleteStudent(studentid){Swal.fire({
        title: 'Jesteś pewien?',
        text: "Akcji nie będzie można cofnąć!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Tak, usuń!'
      }).then((result) => {
        if (result.isConfirmed) {

            fetch('https://courseapibb.azurewebsites.net/api/student/' + studentid,{
            method:'DELETE',
            header:{'Accept':'application/json',
            'Content-Type':'application/json'}
        })
          Swal.fire(
            'Usunięto!',
            'Kurs został usunięty',
            'success'
          )
    }
    })

    }
    render(){
        const {students, studentid, studentname, studentsname, course, dateofjoining, photo}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});

        return(
            <div>
                <div class="p-3"> 

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Dodaj studenta</Button>

                    <AddStudentModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
                   
                </div>
               <Table className="mt-4" striped bordered hover size ="sm">
                   <thead>
                       <tr>
                       <th>ID Studenta</th>
                       <th>Imię studenta</th>
                       <th>Nazwisko</th>
                       <th>Nazwa kursu</th>
                       <th>Data dołączenia</th>
                       <th>Opcje</th>

                       </tr>
                   </thead>
                    <tbody>
                       {students.map(student=>
                        <tr key={student.StudentId}>
                            <td>{student.StudentId}</td>
                            <td>{student.StudentName}</td>
                            <td>{student.StudentSecondName}</td>
                            <td>{student.Course}</td>
                            <td>{student.DateOfJoining}</td>
                            <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        studentid:student.StudentId,
        studentname:student.StudentName,
        studentsname:student.StudentSecondName,
        course:student.Course,
        dateofjoining:student.DateOfJoining,
        photo:student.photo
        })}>
            Edytuj
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteStudent(student.StudentId)} >
            Usuń
        </Button>


       <EditStudentModal show={this.state.editModalShow}
       onHide={editModalClose}
       studentid={studentid}
       studentname={studentname}
       studentsname={studentsname}
       course={course}
       dateofjoining={dateofjoining}
       photo={photo}
       />
</ButtonToolbar>                         
                            </td>


                        </tr>)}
                   </tbody>
               </Table>

               



            </div>

        )
    }
    
}

