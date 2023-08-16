import React, { useEffect, useState } from "react";
import { GrMoreVertical } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../utils/functions";
import { singleUser } from "../features/user/userSlice";

function SingleDonation({ donor }) {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <div className=' mb-5   flex items-start justify-between gap-8 bg-grey py-3 px-5 rounded text-black'>
      <div className='cursor-pointer'>
        <h6 className='text-md font-extrabold'>{donor?.title}</h6>
        <p className='text-sm my-2'>{donor?.description}</p>
        <span className='italic text-zinc-700 text-xs  mt-2'>
          by {checkUser(donor.charity)}
        </span>
      </div>
    </div>
  );
}

export default SingleDonation;
