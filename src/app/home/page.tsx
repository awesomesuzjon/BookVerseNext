import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HomeContent from '../components/HomeContent';

const HomePage: React.FC = () => {
    return (
        <div className="flex bg-primary-1">
           <span className='min-w-52'>
            <Sidebar />
           </span>

            <div className="flex-1 flex flex-col">
                <Navbar/>
                <HomeContent/>
            </div>
        </div>
    );
};

export default HomePage;
