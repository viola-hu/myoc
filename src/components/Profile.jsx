import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


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
        image: '/billmurray300.jpg'
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

      // let leftCol = this.state.userProfile.skills.slice(0,6);
      // let rightCol = this.state.userProfile.skills.slice(6);

      <Container>
        <Row className="avatar">
          <div className='avatar-subcontainer'>
            <Image className='avatar-image'src={process.env.PUBLIC_URL + this.state.userProfile.image} roundedCircle />
          </div>
          <div className='avatar-subcontainer'>
            <h3>{this.state.userProfile.name} {' '}
              <Image src={process.env.PUBLIC_URL + 'edit.png'} style={{width: '20px'}}/>
            </h3>
            <div>{this.state.userProfile.title}</div>
            <div>{this.state.userProfile.location}</div>
          </div>
        </Row>
        <hr style={{margin:0}}/>
        <div>
          {
            this.state.userProfile.skills.length === 0
            ?
            <p> loading... </p>
            :
            <Row>
              <Col className="skills" lg={8}>
                <Row className="skills-title">
                  <span style={{margin:'.5rem', fontSize:'larger', fontWeight:'900'}}>Skills</span>
                  <div style={{display:'flex', width:'88%', justifyContent:'flex-end'}}>
                    <Button style={{margin: '0.5rem'}} variant="success">+ Add New Skills</Button>
                    <Button style={{margin: '0.5rem'}} variant="success">Edit Skills</Button>
                  </div>
                </Row>
                <Row style={{margin:'1rem'}}>
                  <ul>
                    {
                    this.state.userProfile.skills.map( skill => (
                      <li>{skill}</li>
                    ))
                    }
                  </ul>
                </Row>
              </Col>
              <Col className="contact" lg={4}>
                <Row className="contact-title">
                  <span style={{margin:'.5rem', fontSize:'larger', fontWeight:'900'}}>Contact</span>
                  <div style={{display:'flex', width:'71%', justifyContent:'flex-end'}}>
                    <Button style={{margin: '0.5rem'}} variant="success">Edit</Button>
                  </div>
                </Row>
                <Row className="contact-item-middle">
                  <img
                    src="https://img.icons8.com/metro/52/000000/filled-message.png"
                    style={{height: '30px', width: '30px'}}
                  />
                  <div className="contact-text">{this.state.userEmail}</div>
                </Row>
                <Row className="contact-item-middle">
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/phone.png"
                    style={{height: '30px', width: '30px'}}
                  />
                  <div className="contact-text">{this.state.userProfile.mobile}</div>
                </Row>
                <Row className="contact-item">
                  <img
                    src="https://img.icons8.com/metro/52/000000/linkedin.png"
                    style={{height: '30px', width: '30px'}}
                  />
                  <div className="contact-text">{this.state.userProfile.linkedIn}</div>
                </Row>
                <Row className="empty-row">
                </Row>
                <Row className="contact-title">
                  <span style={{margin:'.5rem', fontSize:'larger', fontWeight:'900'}}>Resume</span>
                  <div style={{display:'flex', width:'70%', justifyContent:'flex-end'}}>
                    <Button style={{margin: '0.5rem'}} variant="success">Upload</Button>
                  </div>
                </Row>
              </Col>
            </Row>
          }
        </div>
      </Container>
    );
  }
}

export default Profile;
