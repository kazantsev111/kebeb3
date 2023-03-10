import React from 'react';
import { useState } from "react";
import FormOrder from './FormOrder';
import RadioButton from "./RadioButton";
import axios from "axios";
import ListCurer from './ListCurer';

export default function Lkcur({ currentUser, orders }) {
  return (
    <div>
        <FormOrder currentUser={currentUser}/>
        <ul className="list-group">
          {/* <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li> */}
        </ul>
        <ListCurer currentUser={currentUser} orders={orders}/>
    </div>
  );
}