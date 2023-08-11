import React from "react";
import img from "../images/hero.jpg";
function Why() {
  return (
    <section className='max-w-5xl md:w-4/5 sm:w-9/12 mx-auto py-8'>
      <div className='flex flex-wrap lg:grid grid-cols-2 gap-4 py-14 items-center justify-center '>
        <div className='w-full'>
          <h3 className='text-2xl text-green '>Why To Join </h3>
          <h2 className='text-4xl text-light-grey font-semibold  leading-10 text-start my-4'>
            Your support can make a huge difference
          </h2>
        </div>
        <div className=''>
          <p className='text-light-grey'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            quae temporibus velit minus alias eaque. Cumque esse magni debitis.
            Sapiente, voluptatem impedit ea aperiam nobis cupiditate illo
            incidunt at accusamus quasi sint fuga asperiores fugiat dolore
            minima minus ullam quam.
          </p>
        </div>
      </div>
      <div className='my-10 flex flex-wrap lg:grid grid-cols-1 xl:grid-cols-3   lg:grid-cols-2 gap-10 items-center justify-center '>
        <div>
          <img src={img} alt='' />
          <h5 className='text-xl text-green mt-4 text-center  uppercase '>
            Help Rebuild Nepal
          </h5>
          <p className='text-center py-4  border-grey text-sm text-black'>
            Donated $50000/ <br />
            <span className='text-green'> $250000</span>
          </p>
          <p className='text-sm text-center text-light-grey mb-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            praesentium distinctio tempora aliquid dolorum,
          </p>
          <p className='text-center text-sm my-3 bg-green text-white py-4 px-2  '>
            Donate Now
          </p>
        </div>{" "}
        <div>
          <img src={img} alt='' />
          <h5 className='text-xl text-green mt-4 text-center  uppercase '>
            Help Rebuild Nepal
          </h5>
          <p className='text-center py-4  border-grey text-sm text-black'>
            Donated $50000/ <br />
            <span className='text-green'> $250000</span>
          </p>
          <p className='text-sm text-center text-light-grey mb-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            praesentium distinctio tempora aliquid dolorum,
          </p>
          <p className='text-center text-sm my-3 bg-green text-white py-4 px-2  '>
            Donate Now
          </p>
        </div>{" "}
        <div>
          <img src={img} alt='' />
          <h5 className='text-xl text-green mt-4 text-center  uppercase '>
            Help Rebuild Nepal
          </h5>
          <p className='text-center py-4  border-grey text-sm text-black'>
            Donated $50000/ <br />
            <span className='text-green'> $250000</span>
          </p>
          <p className='text-sm text-center text-light-grey mb-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            praesentium distinctio tempora aliquid dolorum,
          </p>
          <p className='text-center text-sm my-3 bg-green text-white py-4 px-2  '>
            Donate Now
          </p>
        </div>{" "}
      </div>
      
    </section>
  );
}

export default Why;
