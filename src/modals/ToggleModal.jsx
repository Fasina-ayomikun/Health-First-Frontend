import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkUserPermission } from "../utils/functions";
import { useEffect } from "react";
import { getAllCharities } from "../features/charities/charitiesSlice";
import { deleteCharity } from "../features/singleCharity/singleCharitySlice";

function ToggleModal({ id, email, files }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.singleCharity);

  useEffect(() => {
    dispatch(getAllCharities());
  }, []);

  return (
    <ul className='absolute w-48 mt-6 sm:right-2  rounded px-3 py-2  bg-zinc-800 text-grey text-md '>
      <li className='my-3'>
        <Link to={`/profile/${user._id}`} className='flex items-center gap-3'>
          <CgProfile className='text-2xl text-stone-500' /> View profile
        </Link>
      </li>{" "}
      {checkUserPermission(email) && (
        <>
          <li
            className='my-3'
            onClick={() => {
              localStorage.setItem(
                "Health-first-edit-charity",
                JSON.stringify(files)
              );
            }}
          >
            <Link to={`/edit/${id}`} className='flex items-center gap-3'>
              <AiFillEdit className='text-xl text-stone-500' /> Edit Charity
            </Link>
          </li>
          <li
            onClick={() => {
              dispatch(deleteCharity(id));
              navigate("/charities");
            }}
            className='my-3 flex items-center gap-3'
          >
            <FaTrash className='text-md text-stone-500' /> Delete Charity
          </li>
        </>
      )}
    </ul>
  );
}

export default ToggleModal;
