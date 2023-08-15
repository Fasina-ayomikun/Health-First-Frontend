import React, { useEffect } from "react";
import img from "../images/hero.jpg";
import Loading from "../utils/Loading";
import ShowCharity from "./showCharity";
import { useDispatch, useSelector } from "react-redux";
import { profileCharities } from "../utils/functions";
import { getAllCharities } from "../features/charities/charitiesSlice";
function Why() {
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
      {isLoading ? (
        <Loading small={true} />
      ) : (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 items-center justify-between mt-16 w-full'>
          {charities.length < 1 ? (
            <p className='text-grey h-48'>No charities to display.</p>
          ) : (
            charities.map((charity) => {
              return <ShowCharity key={charity._id} charity={charity} />;
            })
          )}
        </div>
      )}
    </section>
  );
}

export default Why;
