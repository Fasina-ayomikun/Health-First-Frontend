import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { checkUser } from "../utils/functions";
import DonationModal from "../modals/DonationModal";
function ShowCharity({ charity }) {
  const [openDonation, setOpenDonation] = useState(false);

  const navigate = useNavigate();

  const {
    _id,
    title,
    image,
    description,
    amountNeeded,
    amountDonated,
    user: charityUser,
  } = charity;
  return (
    <div className=' w-full flex flex-col justify-between  h-full'>
      <div className='relative h-48  w-full max-h-80 main-image'>
        <img
          src={image}
          alt=''
          className='rounded max-height h-full w-full object-cover'
        />
        <Link to={`/charities/${charity._id}`}>
          <div className='absolute left-0 top-0 grid place-content-center bg-black opacity-80 w-full h-full  rounded'>
            <AiOutlineSearch className='text-4xl text-grey' />
          </div>
        </Link>
      </div>
      <h5 className='text-xl text-green mt-4 text-center  uppercase '>
        {title}
      </h5>
      <p className='text-center py-4  border-grey text-sm text-black'>
        Donated <span>&#8358;</span>
        {amountDonated}/ <br />
        <span className='text-green'>
          {" "}
          <span>&#8358;</span>
          {amountNeeded}
        </span>
      </p>
      <p className='text-sm text-center text-light-grey mb-4 truncate'>
        {description}
      </p>
      <button
        className=' text-center text-sm my-3 bg-green text-white py-4 px-2  w-full'
        onClick={() => {
          setOpenDonation(true);
        }}
      >
        Donate Now
      </button>
      {openDonation && (
        <DonationModal id={_id} setOpenDonation={setOpenDonation} />
      )}
    </div>
  );
}

export default ShowCharity;
