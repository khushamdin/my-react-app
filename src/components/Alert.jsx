import React from 'react';

export default function Alert(props) {
  return (
    props.alert && ( // Render the alert only if there is a message
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {props.alert}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}
