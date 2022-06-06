import React from 'react';
import { Spinner } from 'react-bootstrap';

function LoadingBox() {
  return (
    <Spinner animation="grow" variant="warning">
      <span className="visually-hidden">loading...</span>
    </Spinner>
  );
}

export default LoadingBox;
