import React, { Component } from 'react';
import {ButtonToolbar, Table} from 'react-bootstrap';
import Swal from 'sweetalert2';
import {Button} from 'react-bootstrap';
import {AddKursModal} from './AddKursModal';
import {EditKursModal} from './EditKursModal';


export class Kursy extends Component{


    constructor(props){
        super(props);
        
      this.state={deps:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://courseapibb.azurewebsites.net/api/course/')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }


    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteKurs(kursid){Swal.fire({
        title: 'Jesteś pewien?',
        text: "Akcji nie będzie można cofnąć!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Tak, usuń!'
      }).then((result) => {
        if (result.isConfirmed) {

            fetch('https://courseapibb.azurewebsites.net/api/course/' + kursid,{
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
        const {deps, kursid, kursname}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});

        return(     
            <div>
                <div class="p-3"> 

                    <ButtonToolbar>
                        <Button variant='primary'
                            onClick={()=>this.setState({addModalShow:true})}>
                            Add Department</Button>
                            <AddKursModal show={this.state.addModalShow}
                            onHide={addModalClose}/>
                    </ButtonToolbar>
                   
                </div>

            <div>
                <Table className="mt-4" striped bordered hover size ="sm" margin="5rem">
                    <thead>
                        <tr>
                        <th>CourseId</th>
                        <th>CourseName</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                        <tbody>
                        {deps.map(dep=>
                            <tr key={dep.CourseId}>
                                <td>{dep.CourseId}</td>
                                <td>{dep.CourseName}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={()=>this.setState({editModalShow:true,
                                            kursid:dep.CourseId,kursname:dep.CourseName})}>
                                            Edytuj
                                        </Button>

                                        <Button className="mr-2" variant="danger"
                                        onClick={()=>this.deleteKurs(dep.CourseId)} >
                                        Usuń
                                        </Button>


                                        <EditKursModal show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        kursid={kursid}
                                        kursname={kursname}/>
                                    </ButtonToolbar>                         
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        </div>

        )
    }
    
}
