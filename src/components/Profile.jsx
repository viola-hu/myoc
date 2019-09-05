import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Profile extends Component {
  constructor(){
    super();
    this.state = {
      userProfile: {
        name: '',
        title: '',
        location: '',
        skills: [],
        mobile: '',
        linkedIn: '',
        image: ''
      },
      dummyProfile: {
        name: 'Bill Murray',
        title: 'Junior Software Developer',
        location: 'Sydney, Australia',
        skills: ['Python', 'Ruby', 'Critical Thinking', 'Analytical Skills', 'Microsoft Office', 'Multi Tasking', 'Stakeholder Communication'],
        mobile: '0412 345 678',
        linkedIn: 'www.linkedin.com/in/billmurray',
        image: 'http://www.fillmurray.com/300/300'
      },
      errorMessage: '',
      // dummy userEmail
      userEmail: 'billmurray@myob.com.au',
    };
  }

  componentDidMount(){
    console.log('componentDidMount ran!');
    this.fetchUserProfile();
  }



  // suppose, when the user logs in, their email address is stored somewhere, e.g. localstorage;

  fetchUserProfile = () => {
    // ###### dummy data #######
    this.setState({
      userProfile: this.state.dummyProfile
    });
    // ###### real situation ######
    // const URL = `http://localhost:3000/userprofile/${userEmail}`;
    //
    // // send axios request to get the user's profile
    // axios.get(URL)
    // .then(res => {
    //   console.log('database response:', res);
    //   this.setState({
    //     userProfile: this.state.dummyProfile
    //   });
    // })
    // .catch( err => {
    //   console.warn(err);
    // })

  } // fetchUserProfile()

  render(){
    return(

      <Container>
        <Row>
          <Image src={this.state.userProfile.image} fluid />
          <p>{this.state.userProfile.name}</p>
          <p>{this.state.userProfile.title}</p>
          <p>{this.state.userProfile.location}</p>
        </Row>
        <div>
          {
            this.state.userProfile.skills.length === 0
            ?
            <p> loading... </p>
            :
            <Row>
            <Col lg={8}>
              <h3>Skills</h3>
                <ul>
                  {
                  this.state.userProfile.skills.map( skill => (
                    <li>{skill}</li>
                  ))
                  }
                </ul>
            </Col>
            <Col lg={4}>
              <h3>Contact</h3>
              <p>{this.state.userEmail}</p>
              <p>{this.state.userProfile.mobile}</p>
              <p>{this.state.userProfile.linkedIn}</p>

            </Col>
          </Row>
          }
        </div>
      </Container>
    );
  }

}

export default Profile;
