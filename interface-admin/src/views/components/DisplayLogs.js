/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  Fragment,
  useEffect,
  useState,
  useContext,
  useCallback,
} from "react";
import CRUDTable from "../components/CRUDTable";
import PageHeader from "../components/PageHeader";
import { useHistory } from "react-router-dom";

const DisplayLogs = () => {
  const [logs, setLogs] = useState([]);

  const columns = ["Time", "state", "event"];

  return (
    <Fragment>
      <div className='page-header'>
        <PageHeader title={`Logs`} />
      </div>
      <div className='row row-cards row-deck'>
        <div className='col-md-10'>
          <CRUDTable columns={columns} data={logs} />
        </div>
      </div>
    </Fragment>
  );
};

export default DisplayLogs;
