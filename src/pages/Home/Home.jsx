import React from 'react';
import Banner from '../../components/HomeComponents/Banner';
import LearningFromLife from '../../components/HomeComponents/LearningFromLife';
import FeaturedLessons from '../../components/HomeComponents/FeaturedLessons';
import TopContributors from '../../components/HomeComponents/TopContributors';
import MostSavedLessons from '../../components/HomeComponents/MostSavedLesson';
import Features from '../../components/HomeComponents/Features';
import Services from '../../components/HomeComponents/Services';
import Testimonials from '../../components/HomeComponents/Testimonials';
import Blogs from '../../components/HomeComponents/Blogs';
import Newsletter from '../../components/HomeComponents/Newsletter';
import FAQ from '../../components/HomeComponents/FAQ';

const Home = () => {
    return (
        <div className='mt-16'>
            <Banner></Banner>
            <Features></Features>
            <FeaturedLessons></FeaturedLessons>
            <LearningFromLife></LearningFromLife>
            <Services></Services>
            <TopContributors></TopContributors>
            <MostSavedLessons></MostSavedLessons>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Newsletter></Newsletter>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;