import React, { useEffect, useState } from "react";
import { GrMoreVertical } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../utils/functions";
import { singleUser } from "../features/user/userSlice";

function SingleDonation({ donor }) {
  return (
    <div className=' mb-5   flex items-start justify-between gap-8 bg-grey py-3 px-5 rounded text-black'>
      <div className='cursor-pointer'>
        <h6 className='text-md font-extrabold'>{donor?.charity?.title}</h6>

        <span className='italic text-zinc-700 text-xs  mt-2'>
          by {checkUser(donor?.user)}
        </span>
      </div>
    </div>
  );
}

export default SingleDonation;
