import React from "react";
import { Button } from "semantic-ui-react";

export default function Presentation(props) {
  const { title, message, toggleVisibility, isVisible, loading, getData, data } = props;
  return  (
    <div style={{margin:'20px'}}>
      <h1>{title}</h1>
      {isVisible ? <p>I'm visible</p> : <p> Not Visible </p>}
      <p>{message}</p>
      <button onClick={toggleVisibility}> Click me! </button>
      {JSON.stringify(data || {})}
      <div>
        <Button
          disabled={loading}
          loading={loading}
          onClick={getData}
        >
          Sign in
        </Button>
      </div>
    </div>
  );
}
