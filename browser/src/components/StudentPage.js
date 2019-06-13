import React,{Component} from 'react';
import { Card, Button, Jumbotron, ProgressBar, ListGroup, Form} from 'react-bootstrap';
import {LinkedCalendar} from 'rb-datepicker';
import {MDBRow, MDBContainer, MDBCol } from "mdbreact";



export default class Student extends Component{

  render() {
    return(
      <section className="mainStyle">
        <Jumbotron className='text-center bg-info studentBackround'>
         <div className='opacity'>
          <h1>Hello, StudentName!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling
           extra attention to featured content or information.
          </p>
          <p>
            <Button variant="dark">Logout</Button>
          </p><br/>
          </div><br/><br/><br/><br/>

          <MDBContainer>
           <MDBRow>

            <MDBCol md="3"></MDBCol>

            <MDBCol md="6">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <div className="my-5 ">
                <label htmlFor="customRange1">Course Evaluation</label>
                <input type="range" className="custom-range" id="customRange1" />
                </div>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <div className="my-5">
                <label htmlFor="customRange1">Teacher Evaluation</label>
                <input type="range" className="custom-range" id="customRange1" />
                </div>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your Opinion!</Form.Label>
              <Form.Control as="textarea" rows="3" />
              </Form.Group>

              <Button variant="secondary" type="submit">Submit</Button>
             </Form>

           </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Jumbotron>
    </section>
      )
    }
  }
