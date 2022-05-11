import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle'
import Banner from '../../Pages/Home/Banner'
import Info from './Info/Info';

const Home = () => {
    return (
        <div>
          <PageTitle title={'home'}></PageTitle>
          <Banner></Banner>
          <Info></Info>
        </div>
    );
};

export default Home;