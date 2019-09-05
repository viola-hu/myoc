import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class JobSearch extends Component{
  constructor(){
    super();
    this.state = {
      matchingJobList: [],
      dummyMatchingJobList: [
      {
        title: 'Senior Software Developer',
        department: 'Engineering',
        location:'Sydney, Australia',
        hiringManager: 'Peter'
      },
      {
        title: 'Senior Architect',
        department: 'Engineering',
        location:'Auckland, New Zealand',
        hiringManager:'Julie'
      },
      {
        title: 'Business Analyst',
        department: 'Operation',
        location:'Sydney, Australia',
        hiringManager:'Mena'
      },
    ],
      // dummy userEmail
      userEmail: 'billmurray@myob.com.au',
    }
  }


  componentDidMount(){
    console.log('componentDidMount ran!');
    this.fetchMatchingJobs();
  }

  fetchMatchingJobs = () => {
    // ###### dummy situation #######
    this.setState({
      matchingJobList: this.state.dummyMatchingJobList
    });


    // ###### real situation! ########
    // const URL = `http://localhost:3000/matchingjobs/${this.state.userEmail}`;
    //
    // axios.get(URL)
    // .then(res => {
    //   console.log(res);
    //   this.setState({
    //     matchingJobList: this.state.dummyMatchingJobList
    //   });
    // })
    // .catch( err => {
    //   console.warn('no success',err);
    // })
  };



  render(){
    return(
      <Container>
        <Row> Jobs </Row>
        <Row>
          {
            this.state.matchingJobList.length === 0
            ?
            <p> loading... </p>
            :
            this.state.matchingJobList.map(job => (
              <Col lg={4} key={job.title}>
                <Link to={'/#/'}>
                  <div>
                    <h3>{job.title}</h3>
                    <p>{job.department}</p>
                    <p>{job.location}</p>
                    <p>Save Job</p>
                    <p>Manager: {job.hiringManager}</p>
                  </div>
                </Link>
              </Col>
            ))
          }
        </Row>
      </Container>
    );
  }
}

export default JobSearch;
// {this.state.matchingJobList}
