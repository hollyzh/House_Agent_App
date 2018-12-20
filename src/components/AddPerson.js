import React,{Component} from 'react';
import PersonActions from '../actions/PersonActions';
import { browserHistory } from 'react-router';
import PersonIcon from '../images/person.png';


export default class AddPerson extends Component{
  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      phoneNum:''
    }

  this.submitPerson=this.submitPerson.bind(this);

 }


  resetForm(){
    this.setState({
      name:'',
      email:'',
      phoneNum:''
    })
  }


  submitPerson(e){
    e.preventDefault();
    let person ={
      name:this.state.name,
      email:this.state.email,
      phoneNum:this.state.phoneNum
    }

    PersonActions.createPerson(person);
    this.setState({'person':''})
    this.resetForm();
    browserHistory.push('/sell/viewperson');
  }

  render(){
    let {person} = this.state;
    return (
      <div className ="maindiv">
        <h2 className="text-center"><img width="80px"  src={PersonIcon}/></h2>
        <form className ="formStyle" onSubmit={this.submitPerson}>
          <div className="container form-group ">
            <input type="text" placeholder="Name" value = {this.state.name} className="form-control input-lg input1"
              onChange={e=>this.setState({name:e.target.value})}/>
          </div>
          <div className="container form-group">
            <input type="text" placeholder ="Email ID" value = {this.state.email} className="form-control input-lg input2"
              onChange={e=>this.setState({email:e.target.value})}/>
          </div>
          <div className="container form-group">
            <input type="Number"  placeholder="PhoneNumber" value ={this.state.phoneNum}className="form-control input-lg input3"
             onChange={e=>this.setState({phoneNum:e.target.value})}/>
          </div>
          <div className="container form-group text-center">
              <button id = "prsnsbtid" type="submit"  className="btn btn-primary btn-lg">Submit</button>
          </div>
          </form>
        </div>
      )
    }
  }
