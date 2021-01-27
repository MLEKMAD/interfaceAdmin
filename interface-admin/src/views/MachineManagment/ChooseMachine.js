/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";

// import { AppContext } from "../../context/AppContext";
import ListMachine from "../components/ListMachine";
// import { Link } from "react-router-dom";

const Researchers = () => {
  const [machines, setMachines] = useState([]);
  useEffect(() => {
    const listMachines = [
      { isdifferent: true, username: "All The machines" },
      {
        username: "interfadm",
        ip_address: "monitorme1.ddns.net",
        password: "Projet654!",
      },
      {
        username: "interfadm",
        ip_address: "monitorme2.ddns.net",
        password: "Projet654!",
      },
    ];
    if (localStorage.getItem("newMachine") !== null) {
      listMachines.push(JSON.parse(localStorage.getItem("newMachine")));
    }
    setMachines([...new Set(listMachines)]);
  }, []);

  return (
    <div className='container'>
      <PageHeader title='Choose The machine (Click on all Machines if you want to see The global dashbord)' />
      <div className='row'>
        <div className='col-md-8'>
          <div className='card '>
            <div className='card-header'>
              <h3 className='card-title'>Machines</h3>
            </div>
            <div className='card-body p-0'>
              <div
                style={{ height: "300px", maxHeight: "300px" }}
                className='list  overflow-auto list-row list-hoverable'
              >
                {machines.map((item, index) => (
                  <ListMachine key={index} machine={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Researchers;
