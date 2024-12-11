import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      {/* Main Title */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* Image and Text Section */}
      <div className='relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl'>
        {/* Image Column */}
        <div className='w-full h-64 lg:w-1/2 lg:h-auto'>
          <img className='h-full w-full object-cover' src={assets.about_img} alt="About us" />
        </div>

        {/* Text Column */}
        <div className='max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12'>
          <div className='flex flex-col p-12 md:px-16'>
            <h2 className='  text-red-600 lg:text-4xl text-2xl font-bold md:text-3xl'>Khulood Online Shop</h2>
            <p className='mt-4 text-gray-500'>
              Khulood Online Shop was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
            </p>
            <p className='mt-4 text-gray-500'>
              Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
            </p>
            <b className='mt-4 text-red-600 lg:text-2xl text-2xl font-bold md:text-2xl' >Our Mission</b>
            <p className='mt-4 text-gray-500'>
              Our mission at Khulood Online Shop is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
            </p>
          
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-xl py-4 pt-40'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      {/* Feature Details */}
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      {/* Newsletter Box */}
      <NewsletterBox />
    </div>
  );
};

export default About;
