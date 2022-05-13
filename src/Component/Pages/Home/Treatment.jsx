import React from 'react';
import Hero from '../../Shared/Hero/Hero';
import dentalImg from '../../../img-assets/images/treatment.png'

const treatment = () => {
    const heroData = {
        img: dentalImg,
        title: 'Exceptional Dental Care, on Your Terms',
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page"
    }
    return (
        <div className='lg:container lg:mx-auto my-20'>
            <div className='flex mx-8 md:flex-row-reverse gap-x-10 justify-center items-center flex-col gap-y-3 lg:h-[80vh]'>
                <Hero heroData={heroData}></Hero>
            </div>
        </div>
    );
};

export default treatment;