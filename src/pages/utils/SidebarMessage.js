import React from 'react';
import { ListGroup } from 'react-bootstrap';

function SidebarMessage() {
  return (
    <ListGroup.Item>
      <div className="text-center">
        <i className="fa fa-envelope-o fa-2x" />
        <p className="m-0">No new messages</p>
      </div>
    </ListGroup.Item>
  );
}

export default SidebarMessage;