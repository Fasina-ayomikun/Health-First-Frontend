import React, { useEffect } from "react";
import img from "../images/image1.jpg";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { profileCharities } from "../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import ShowCharity from "../components/showCharity";
import Loading from "../utils/Loading";
import { getAllCharities } from "../features/charities/charitiesSlice";
function Charities() {
  let currentProfile = JSON.parse(
    localStorage.getItem("Mama-charity-user-profile")
  );
  const { charities } = useSelector((s) => s.charities);
  const profileUserCharities = profileCharities(charities, currentProfile?._id);
  const dispatch = useDispatch();
  const { profileUser, isLoading } = useSelector((s) => s.user);
  useEffect(() => {
    dispatch(getAllCharities());
  }, []);
  return (
    <>
      <Hero text='Donate Now' />
      <section className='max-w-5xl md:w-4/5 sm:w-9/12 mx-auto py-8'>
        <h2 className='text-3xl underline font-semibold capitalize text-center my-4 text-black'>
          Donate now
        </h2>
        {isLoading ? (
          <Loading small={true} />
        ) : (
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 items-center justify-between mt-16 w-full'>
            {profileUserCharities.length < 1 ? (
              <p className='text-grey h-48'>No charities to display.</p>
            ) : (
              profileUserCharities.map((charity) => {
                return <ShowCharity key={charity._id} charity={charity} />;
              })
            )}
          </div>
        )}
        <button className='capitalize border-b-2 rounded mx-auto flex my-12 text-black border-green'>
          See More
        </button>
      </section>
      <Footer />
    </>
  );
}

export default Charities;
