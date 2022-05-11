import React from 'react';
import chairImage from '../../../img-assets/images/chair.png'
import bgImage from '../../../img-assets/images/bg.png'

const Banner = () => {
    return (
        <section className='bg-cover bg-center bg-no-repeat min-h-[90vh] lg:container lg:mx-auto mx-5' style={{"backgroundImage": `url(${bgImage})`}}>
            <div className='flex md:flex-row flex-col lg:grid-cols-2 items-center justify-center h-[700px] my-auto gap-4 mx-5'>
            <div className='text-left'>
                <h1 className='capitalize text-4xl font-semibold'>Your new smile starts here </h1>
                <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur quos dicta eligendi, praesentium autem unde consequatur. Animi, impedit odit!</p>
                <button className='bg-[#19D3AE] uppercase py-2 px-3 rounded-md mt-4 text-white font-semibold hover:bg-[#0FCFEC]'>Get Started</button>
            </div>
            <div className='md:order-1'>
                <img src={chairImage} alt="" className='max-w-full mx-auto'/>
            </div>
            </div>
        </section>
    );
};

export default Banner;