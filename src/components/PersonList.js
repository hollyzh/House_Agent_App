import React , {Component} from 'react';
import PersonActions from '../actions/PersonActions';
import { browserHistory } from 'react-router'

export default class PersonList extends Component{
  constructor(props){
    super(props);

    this.select=this.select.bind(this);
  }

  select(houseId, buyerId){
    PersonActions.addOwner(houseId, buyerId);
    browserHistory.push('/sell/soldHouse');
    
  }

  render(){
    let {_id,name,email,phoneNum,houseId}=this.props;
    return(
      <tr key={_id}>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phoneNum}</td>
        <td>
          <button id = {_id} onClick={this.select.bind(null,houseId,_id)} className ="btn btn-success">Select</button>
        </td>
      </tr>
    )
  }
}
