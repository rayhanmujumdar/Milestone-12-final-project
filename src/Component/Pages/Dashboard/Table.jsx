import React from 'react';
import { Link } from 'react-router-dom';

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
              <th>Treatment</th>
              <th>payment</th>
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
                  <td>{(app.price && !app.paid) && <Link to={`/dashboard/payment/${app._id}`}><button className='btn btn-xs btn-success'>Pay Now</button></Link>}
                  {(app.price && app.paid) && <span className='text-success'>Paid</span>}
                  </td>
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