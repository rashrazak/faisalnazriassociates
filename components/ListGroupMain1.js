import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class ListGroupMain extends React.Component {
  render() {
    return (
      <ListGroup flush style={{margin:'10px 20px'}}>
        <ListGroupItem className="listx">An inexperience bookkeeper that can't handle the work</ListGroupItem>
        <ListGroupItem className="listx">Paid a part timer/ freelancer who are not held Public Practice Certificate</ListGroupItem>
        <ListGroupItem className="listx">Your outsourced accountant doesn't answer your calls</ListGroupItem>
        <ListGroupItem className="listx">Require more expert advice on other issues </ListGroupItem>
        <ListGroupItem className="listx">Afraid of your company confidential been leaked</ListGroupItem>
      </ListGroup>
    );
  }
}