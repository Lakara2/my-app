import React from "react";
import { ListGroup } from "react-bootstrap";

function SidebarNav() {
  return (
    <ListGroup>
      <ListGroup.Item action href="#">
        Dashboard
      </ListGroup.Item>
      <ListGroup.Item action href="#">
        Products
      </ListGroup.Item>
      <ListGroup.Item action href="#">
        Customers
      </ListGroup.Item>
      <ListGroup.Item action href="#">
        Orders
      </ListGroup.Item>
      <ListGroup.Item action href="#">
        Settings
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SidebarNav;
