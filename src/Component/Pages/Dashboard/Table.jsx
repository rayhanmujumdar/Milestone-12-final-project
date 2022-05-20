import React from 'react';

const table = ({appointment}) => {
    return (
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>treatment</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {appointment.map((app, index) => {
              return (
                <tr key={app._id}>
                  <th>{index + 1}</th>
                  <td>{app.patient}</td>
                  <td>{app.date}</td>
                  <td>{app.slot}</td>
                  <td>{app.treatment}</td>
                </tr>
              );
            })}
            {/* <!-- row 2 --> */}
          </tbody>
        </table>
      </div>
    );
};

export default table;