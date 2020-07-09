import React from "react";
import "./style.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
library.add(faTrashAlt);
function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      <FontAwesomeIcon icon={faTrashAlt} alt="Delete Listing" />
    </span>
  );
}

export default DeleteBtn;
