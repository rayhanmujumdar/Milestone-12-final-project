import React from 'react';
import {format} from 'date-fns'

const AvailableAppointMent = ({date}) => {
    return (
        <div>
            <h5 className='text-xl font-semibold text-[#19D3AE] my-20'>Available Appointments on {format(date, 'PP')}</h5>
        </div>
    );
};

export default AvailableAppointMent;