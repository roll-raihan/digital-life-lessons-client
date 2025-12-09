import React from 'react';
import Banner from '../../components/HomeComponents/Banner';
import LearningFromLife from '../../components/HomeComponents/LearningFromLife';
import FeaturedLessons from '../../components/HomeComponents/FeaturedLessons';
import TopContributors from '../../components/HomeComponents/TopContributors';
import MostSavedLessons from '../../components/HomeComponents/MostSavedLesson';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedLessons></FeaturedLessons>
            <LearningFromLife></LearningFromLife>
            <TopContributors></TopContributors>
            <MostSavedLessons></MostSavedLessons>
        </div>
    );
};

export default Home;