import React from 'react';
import InfoCart from '../../../Pages/Home/Info/InfoCart'
import clock from '../../../../img-assets/icons/clock.svg'
import marker from '../../../../img-assets/icons/marker.svg'
import phone from '../../../../img-assets/icons/phone.svg'

const Info = () => {
    const infoData = [{
        _id: 1,
        img: clock,
        title: 'Opening Hours',
        text: 'Lorem Ipsum is simply dummy text of the pri',
        bg: 'bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]',
    },{
        _id: 2,
        img: marker,
        title: 'visit our location',
        text: 'mirpur-2,Dhaka,Bangladesh',
        bg: 'bg-[#3A4256]',
    },{
        _id: 3,
        img: phone,
        title: 'contact us now',
        text: '+8801776464695',
        bg: 'bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]',
    }
]
    return (
        <div className='lg:container lg:mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-10 mx-5'>
            {
                infoData.map(info => <InfoCart key={info._id} info={info}></InfoCart>)
            }
        </div>
    );
};

export default Info;