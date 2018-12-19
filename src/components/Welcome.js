import React, { Component } from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import { Link } from 'react-router';
import '../css/style.css'
import JumbotronPic from '../images/House-keys.jpg'

export default class Welcome extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <Jumbotron>
            <h1 className="text-center">Find your way home</h1>
              <p className="text-center">
                <img className="mainPic" src={JumbotronPic}/>
              </p>
          </Jumbotron>
        </div>
      </div>
    )
  }
}
