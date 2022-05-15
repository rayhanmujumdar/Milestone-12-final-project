import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle'
import Banner from '../../Pages/Home/Banner'
import Info from './Info/Info';
import Services from './Services/Services';
import Treatment from './Treatment';
import Appointment from '../../Pages/Home/Appointment/Appointment';
import Testimonial from './Testimonial/Testimonial';
import ContactUs from './ContactUs/ContactUs';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div className=''>
          <PageTitle title={'Home'}></PageTitle>
          <Banner></Banner>
          <Info></Info>
          <Services></Services>
          <Treatment></Treatment>
          <Appointment></Appointment>
          <Testimonial></Testimonial>
          <ContactUs></ContactUs>
          <Footer></Footer>
        </div>
    );
};

export default Home;