import { Link } from "react-router-dom";
import React from "react";

const NotFoundPage = () => {
    return (
      <div>
        <h1>404</h1>
        <Link to="/">Go home</Link>
      </div>
    );
  };

export default NotFoundPage;