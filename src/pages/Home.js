import React from 'react';
import SignupForm from '../components/SignupForm';
import SignUpForm222 from '../components/SignUpForm222';
import img from '../assets/img1.png';

const Home = () => {
    return (
        <div className=''>
            <div className='flex flex-row mt-5'>
                <img className='w-1/2' src={img} />
                <SignUpForm222 />
            </div>
        </div>
    )
}

export default Home;