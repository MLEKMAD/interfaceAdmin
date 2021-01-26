/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, } from "react";
import { useHistory } from "react-router-dom";
import image from "../../assets/images/logo.png";
// import { AppContext } from "../../context/AppContext";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import makeApiServices from "../../api/ApiServices";
import PageHeader from "../components/PageHeader";

function AddMachine() {
  const [inputs, setInputs] = useState({ ip_adress: " ",username:"", password: "" });

  const [Loading, setLoading] = useState(false);
  const history = useHistory();

 


  const handleInputsChange = (event) => {
    event.persist();

    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();  
    console.log("inputs",inputs)
    // try {
    //     const response = await makeApiServices
    // } catch (error) {
      
    // }
    localStorage.setItem('newMachine',JSON.stringify(inputs))
    history.push("/");
  };

  return (
    <div className="page">
      <div className="page-single">
        <div className="container">
          <div className="row">
          <div className=" mb-8 mt-7">
                <img src={image} className="h-8" alt="" />
                <br></br><PageHeader  title="Moni'TSE"/>
              </div>
            <div className="col col-md-4 mx-auto">
              
              <form className="card" onSubmit={handleSubmit}>
                <div className="card-body ">
                  <div className="card-title">
                    Add machine
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Machine Address</label>
                    <input
                      onChange={handleInputsChange}
                      value={inputs.machineAddress}
                      name="machineAddress"
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                      onChange={handleInputsChange}
                      value={inputs.username}
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      onChange={handleInputsChange}
                      value={inputs.password}
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="card-footer">
                  <button type="submit" className="btn btn-block  btn-primary " onClick={()=>setLoading(true)}>
                    Add machine
                  </button>
                  </div>
                  <ClipLoader
          css = {
            css`
            display: block;
            margin-left: auto;
            margin-right: auto;
            border-color: blue;
          `
          }
          size={70}
          color={"#123abc"}
          loading={Loading}
        />
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMachine;
