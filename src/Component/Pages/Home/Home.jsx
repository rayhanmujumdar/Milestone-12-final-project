import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle'
import Banner from '../../Pages/Home/Banner'
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
          <PageTitle title={'home'}></PageTitle>
          <Banner></Banner>
          <Info></Info>
          <Services></Services>
        </div>
    );
};

export default Home;