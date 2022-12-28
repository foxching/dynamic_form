import { useState, useRef, useEffect, Fragment } from "react";
import { fields } from "./data/data";
import { Form } from "./components/Form";

const App = () => {
  return (
    <div className="container-sm">
      <div className="row mt-5">
        <div className="col col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h1 className="mb-3">Dynamic form</h1>
              <Form fields={fields} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
