import React from "react";
import img from "../images/image1.jpg";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
function Charities() {
  return (
    <>
      <Hero text='Donate Now' />
      <section className='max-w-5xl md:w-4/5 sm:w-9/12 mx-auto py-8'>
        <h2 className='text-3xl underline font-semibold capitalize text-center my-4 text-black'>
          Donate now
        </h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 items-center justify-between mt-16 w-full'>
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
        <button className='capitalize border-b-2 rounded mx-auto flex my-12 text-black border-green'>
          See More
        </button>
      </section>
      <Footer />
    </>
  );
}

export default Charities;
