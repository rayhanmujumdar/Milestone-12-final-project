import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle'
import Banner from '../../Pages/Home/Banner'
import Info from './Info/Info';
import Services from './Services/Services';
import Treatment from './Treatment';
import Appointment from '../../Pages/Home/Appointment/Appointment';
import Testimonial from './Testimonial/Testimonial';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
    return (
        <div className='container mx-auto'>
          <PageTitle title={'home'}></PageTitle>
          <Banner></Banner>
          <Info></Info>
          <Services></Services>
          <Treatment></Treatment>
          <Appointment></Appointment>
          <Testimonial></Testimonial>
          <ContactUs></ContactUs>
        </div>
    );
};

export default Home;