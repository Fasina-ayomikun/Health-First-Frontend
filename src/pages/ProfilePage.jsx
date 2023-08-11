import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getAllCharities } from "../features/charities/charitiesSlice";
import { singleUser } from "../features/user/userSlice";
import { checkUserPermission, profileCharities } from "../utils/functions";
import Loading from "../utils/Loading";
import ShowCharity from "../components/showCharity";
function ProfilePage() {
  const [endSlice, setEndSlice] = useState(10);
  const [isActive, setIsActive] = useState(true);

  let currentProfile = JSON.parse(
    localStorage.getItem("Mama-charity-user-profile")
  );
  const { charities } = useSelector((s) => s.charities);
  const profileUserCharities = profileCharities(charities, currentProfile?._id);

  const { profileUser, isLoading } = useSelector((s) => s.user);
  const { firstName, lastName, createdAt } = profileUser;
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singleUser(id));
    dispatch(getAllCharities());
  }, []);
  if (isLoading) {
    return <Loading small={false} />;
  }
  return (
    <>
      <Navbar />
      <section className='max-w-5xl md:w-4/5 sm:w-9/12 mx-auto py-8'>
        <Link
          to='/charities'
          className='flex items-center  gap-3  text-green my-5'
        >
          <HiOutlineArrowNarrowLeft className='text-3xl font-black ' />
          <span className='underline'>Back</span>
        </Link>
        <div className='grid lg:grid-cols-2 item-start sm:grid-cols-1 lg:gap-0 sm:gap-10 max-w-3xl mt-16 mx-auto text-green   mb-10'>
          {/* <ImgContainer user={profileUser} small={false} /> */}
          <div className='relative'>
            <h3 className='text-3xl sm:mt-10 text-green lg: mt-0  lg:text-start sm:text-center font-semibold capitalize text-center my-4'>
              {firstName + " " + lastName}
            </h3>
            {/* <p className='text-sm lg:text-start  sm:text-center my-5'>{bio}</p> */}
            <span className='italic text-xs  mt-8'>
              joined at {moment(createdAt).format("MMMM Do YYYY")}
            </span>
          </div>
        </div>
        <div className='relative'>
          <div className='flex cursor-pointer items-center gap-3 justify-center border-b-2 border-green'>
            <h3
              className={`${
                isActive ? "text-green" : "text-grey"
              } mt-20 text-center  text-2xl font-semibold capitalize text-center my-4`}
              onClick={() => setIsActive(!isActive)}
            >
              charities
            </h3>
            <h3
              className={`${
                !isActive ? "text-green" : "text-grey"
              } mt-20 text-center  text-2xl font-semibold capitalize text-center my-4`}
              onClick={() => setIsActive(!isActive)}
            >
              {" "}
              donations
            </h3>
          </div>
          {checkUserPermission(currentProfile?.email) && (
            <Link
              to='/add'
              className='sm:hidden lg:flex text-green absolute top-0 cursor-pointer right-0 text-xs flex  items-center gap-1 '
            >
              <AiOutlineEdit className='text-xl text-green' />
              Create charity
            </Link>
          )}
        </div>
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
        {profileUserCharities.length <= 10 || (
          <button
            onClick={() =>
              setEndSlice((oldSlice) => {
                oldSlice = oldSlice + 5;
                if (oldSlice > profileUserCharities.length) {
                  oldSlice = profileUserCharities.length;
                }
                return oldSlice;
              })
            }
            className='border-b-2 rounded mx-auto flex my-12 text-green border-green'
          >
            {endSlice === profileUserCharities.length
              ? "End of charities"
              : "more charities"}
          </button>
        )}
      </section>
      <Footer />
    </>
  );
}

export default ProfilePage;
