import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../utils/Loading";
import {
  createDonation,
  clearState,
  handleChange,
} from "../features/donations/singleDonationSlice";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
function DonationModal({ id, setOpenDonation }) {
  const dispatch = useDispatch();
  const { isLoading, amountDonated } = useSelector((s) => s.singleDonation);
  const handleEventChange = (input) => {
    const name = input.name;
    const value = input.value;
    dispatch(handleChange({ name, value }));
  };
  const handleSubmit = () => {
    dispatch(
      createDonation({
        charity: id,
        amountDonated,
      })
    );
  };

  if (isLoading) {
    return (
      <section className='h-screen z-10 w-screen bg-black fixed top-0 left-0'>
        <Loading small={false} />
      </section>
    );
  }
  return (
    <section className='fixed w-screen  z-10 h-screen top-0 left-0 bg-black  flex items-center justify-center mx-auto'>
      <div
        onClick={() => {
          setOpenDonation(false);
          dispatch(clearState());
        }}
        className='cursor-pointer absolute gap-3 left-20 top-24 text-green flex items-center justify-between'
      >
        <HiOutlineArrowNarrowLeft className='  text-3xl '></HiOutlineArrowNarrowLeft>
        <span>Back</span>
      </div>
      <div className='lg:w-2/4 sm:11/12 text-green py-5 px-4 rounded'>
        <h3 className='text-3xl font-extrabold tracking-wide text-center mb-10'>
          Donation
        </h3>

        <input
          type='number'
          name='amountDonated'
          placeholder='Enter amount to donate*'
          onKeyUp={(e) => handleEventChange(e.target)}
          className='text-green block bg-transparent border-green border-b-2  w-full rounded h-10 px-3 mb-5'
        />

        <button
          onClick={() => handleSubmit()}
          className='text-center text-sm my-3 bg-green text-white py-4 px-2  w-full'
        >
          Donate
        </button>
      </div>
    </section>
  );
}
export default DonationModal;
