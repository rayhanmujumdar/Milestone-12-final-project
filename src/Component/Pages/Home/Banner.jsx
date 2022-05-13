import React from 'react';
import chairImage from '../../../img-assets/images/chair.png'
import bgImage from '../../../img-assets/images/bg.png'
import Hero from '../../Shared/Hero/Hero';

const Banner = () => {
    const heroData = {
        img: chairImage,
        title: "Your new smile starts here",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur quos dicta eligendi, praesentium autem unde consequatur. Animi, impedit odit!'
    }
    return (
        <section className='bg-cover bg-center bg-no-repeat h-[60vh] lg:container lg:mx-auto mx-5' style={{"backgroundImage": `url(${bgImage})`}}>
            <div className='flex md:flex-row flex-col lg:grid-cols-2 items-center justify-center my-40 gap-4 mx-5'>
                <Hero heroData={heroData}></Hero>
            </div>
        </section>
    );
};

export default Banner;