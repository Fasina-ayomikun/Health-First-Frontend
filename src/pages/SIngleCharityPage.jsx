import React, { useEffect } from "react";
import { GrMoreVertical } from "react-icons/gr";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCharity } from "../features/singleCharity/singleCharitySlice";
import Loading from "../utils/Loading";
import Footer from "../components/Footer";
import SingleDonation from "../components/SingleDonation";
import ToggleModal from "../modals/ToggleModal";
import DonationModal from "../modals/DonationModal";
import { singleUser } from "../features/user/userSlice";
import { getCharityDonations } from "../features/donations/singleDonationSlice";

function SingleCharityPage() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openDonation, setOpenDonation] = useState(false);
  const [endSlice, setEndSlice] = useState(8);
  const [imageLoading, setImageLoading] = useState(true);

  const {
    isLoading,
    title,
    image,
    description,
    amountNeeded,
    amountDonated,
    listOfDonors,
    medicalReport,
    user,
  } = useSelector((store) => store.singleCharity);

  const { charityDonations } = useSelector((s) => s.singleDonation);
  const dispatch = useDispatch();
  const { id } = useParams();
  const openDonationModal = () => {
    setOpenDonation(true);
  };
  useEffect(() => {
    dispatch(getSingleCharity(id));
    dispatch(getCharityDonations(id));
  }, []);
  useEffect(() => {
    if (image) {
      setImageLoading(false);
    }
  }, [imageLoading]);
  if (isLoading) {
    return <Loading small={false} />;
  }
  return (
    <>
      <section className='text-green max-w-5xl md:w-4/5 sm:w-9/12 mx-auto py-8'>
        <Link
          to='/charities'
          className='flex items-center  gap-3  text-green my-5'
        >
          <HiOutlineArrowNarrowLeft className='text-3xl font-black ' />
          <span className='underline'>Back</span>
        </Link>
        <div className='flex item-center justify-between w-full mb-10'>
          <div></div>
          <div className='cursor-pointer relative'>
            <GrMoreVertical
              onClick={() => {
                setOpen(!open);
                setTimeout(() => {
                  setOpen(false);
                }, [5000]);
              }}
              className='text-3xl text-green'
            />
            {open && (
              <ToggleModal
                files={{
                  isEditing: true,
                  image,
                }}
                email={user?.email}
                id={id}
                setOpen={setOpen}
              />
            )}
          </div>
        </div>
        {imageLoading ? (
          <Loading small={true} />
        ) : (
          <img
            src={image}
            alt=''
            className='object-cover w-full h-48 rounded'
          />
        )}
        <div className='flex flex-wrap items-center justify-between gap-3 my-4'>
          <div className='stars  text-sm text-green flex items-center '>
            <span className='text-green text-sm ml-2 font-extrabold'>
              Donated ${amountDonated} / ${amountNeeded}
            </span>
          </div>
          {amountDonated > amountNeeded && (
            <span className='underline text-sm'>Completed</span>
          )}
        </div>
        <h1 className='  text-wrap font-extrabold tracking-wider my-6 text-2xl text-center'>
          {title}
        </h1>

        <p className=' text-wrap md:px-10 sm:px-2 text-center tracking-wide text-sm'>
          {description}
        </p>
        <h1 className='  text-wrap font-extrabold tracking-wider my-6 text-2xl text-center'>
          Medical Report
        </h1>
        <img
          src={medicalReport}
          alt='Medical Report'
          className='h-80 w-full object-contain'
        />
        <div className='my-7 mt-12 flex items-center justify-between '>
          <h3 className='text-xl font-extrabold tracking-wide '>Donations</h3>
          <h5
            onClick={() => setOpenDonation(true)}
            className='cursor-pointer underline text-green text-sm'
          >
            Donate Now
          </h5>

          {openDonation && (
            <DonationModal id={id} setOpenDonation={setOpenDonation} />
          )}
        </div>
        {isLoading ? (
          <Loading />
        ) : charityDonations.length < 1 ? (
          <h3>No donation on this charity.</h3>
        ) : (
          charityDonations.slice(0, endSlice).map((donor) => {
            return (
              <SingleDonation
                key={donor._id}
                donor={donor}
                setOpenDonation={openDonationModal}
              />
            );
          })
        )}
        {listOfDonors.length < 10 || (
          <button
            onClick={() =>
              setEndSlice((oldSlice) => {
                oldSlice = oldSlice + 5;
                if (oldSlice > listOfDonors.length) {
                  oldSlice = listOfDonors.length;
                }
                return oldSlice;
              })
            }
            className='capitalize border-b-2 rounded mx-auto flex my-12 text-green border-green'
          >
            {endSlice === listOfDonors.length
              ? "End of donations"
              : "more donations"}{" "}
          </button>
        )}
      </section>
      <Footer />
    </>
  );
}

export default SingleCharityPage;
