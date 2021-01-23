import React, { useEffect } from "react";
import $ from "jquery";
import "datatables";

const CRUDTable = ({ columns, data }) => {
  useEffect(() => {
    console.log("Data",data)
    if (data.length) $(".datatable").DataTable();
  }, [data]);

  

  return (
    <div className="card">
      <div className="table-responsive">
        <table className="table card-table table-vcenter text-nowrap datatable">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((objectRow, indextr) => (
              <tr key={indextr}>
                {objectRow.map((element, indextd) => (
                  <td
                    key={indextd}
                    style={{
                      whiteSpace: "nowrap ",
                    }}
                  >
                    {element}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CRUDTable;
