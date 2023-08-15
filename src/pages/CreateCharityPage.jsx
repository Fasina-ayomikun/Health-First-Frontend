import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { AiFillPlusCircle, AiOutlineCheck } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { uploadImage, uploadMedicalReport } from "../features/files/filesSlice";
import {
  createCharity,
  editCharity,
  handleChange,
} from "../features/singleCharity/singleCharitySlice";

import Loading from "../utils/Loading";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

function CreateCharitiesPage() {
  const [editId, setEditId] = useState("");
  const [editingStep, setEditingStep] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const formData = new FormData();
  const medicalReportData = new FormData();
  const navigate = useNavigate();
  const ref = useRef(null);
  const ingredientRef = useRef(null);
  const equipmentRef = useRef(null);
  const charityToEdit = JSON.parse(
    localStorage.getItem("Health-first-edit-charity")
  );
  const localStorageInfo = JSON.parse(
    localStorage.getItem("Mama-charity-created")
  );
  const {
    isLoading,

    image: charityImage,
    title,
    description,
    amountNeeded,
  } = useSelector((store) => store.singleCharity);

  const {
    image,
    medicalReport,
    isLoading: imageLoading,
  } = useSelector((s) => s.files);

  const handleEventChange = (input) => {
    const name = input.name;
    const value = input.value;
    dispatch(handleChange({ name, value }));
  };
  const handleImageUpload = (e) => {
    const input = e.target;
    const file = input.files[0];
    formData.append("image", file);
    dispatch(uploadImage(formData));
  };
  const handleMedicalReportUpload = (e) => {
    const input = e.target;
    const file = input.files[0];
    medicalReportData.append("image", file);
    dispatch(uploadMedicalReport(medicalReportData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charityToEdit?.isEditing) {
      dispatch(
        editCharity({
          editId: id,
          title,
          description,
          amountNeeded,
          image,
          medicalReport,
        })
      );
      localStorage.removeItem("Health-first-edit-charity");
    } else {
      dispatch(
        createCharity({
          title,
          description,
          amountNeeded,
          image,
          medicalReport,
        })
      );
    }
  };

  //   useEffect(() => {
  //     if (editId && editingStep) {
  //       const { step } = instructions.find((item) => item.id === editId);
  //       ref.current.value = step;
  //     }
  //   }, [editId]);

  useEffect(() => {
    if (localStorageInfo) {
      if (id) {
        navigate(`/charities/${id}`);
      } else {
        navigate(`/charities`);
      }
      localStorage.removeItem("Mama-charity-created");
    }
  }, [localStorageInfo]);
  useEffect(() => {
    if (window.location.pathname.includes("add")) {
      localStorage.removeItem("Health-first-edit-charity");
    }
  }, []);
  if (isLoading) {
    return <Loading small={false} />;
  }
  return (
    <section className='max-w-xl   mx-auto  py-8  l{ useState }g:px-0 md:w-4/5 sm:w-9/12'>
      <Link
        to={charityToEdit?.isEditing ? `/charities/${id}` : "/charities"}
        className='flex items-center  gap-3  text-green my-5'
      >
        <HiOutlineArrowNarrowLeft className='text-3xl font-black ' />
        <span className='underline'>Back</span>
      </Link>
      <h3 className='text-3xl font-semibold capitalize text-center my-4 text-green'>
        {charityToEdit ? "Edit" : "Create"} Charity
      </h3>
      <div className='mb-10 w-28  aspect-square mx-auto flex items-center bg-green mt-7 justify-center rounded-full'>
        {imageLoading ? (
          <Loading small={true} />
        ) : (
          <img
            src={`${image ? image : charityToEdit?.image}`}
            alt=''
            className='object-cover h-full w-full rounded-full'
          />
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className='block'>
          <label htmlFor='file' className='text-green mr-5  capitalize '>
            charity's Picture:{" "}
          </label>
          <input
            onChange={handleImageUpload}
            type='file'
            id='file'
            accept='.jpeg,.jpg,.png'
            name='image'
            readOnly={isLoading ? true : false}
            className=' sm:mt-3 w-4/6 md: mt-0 '
          />
        </div>

        <div className='mt-7 grid grid-cols-1 gap-8 relative'>
          <input
            type='text'
            onChange={(e) => handleEventChange(e.target)}
            name='title'
            value={title}
            placeholder='Charity Title*'
            className='text-green block bg-transparent border-green border-b-2  w-full rounded h-10 px-3 '
          />
          <input
            type='text'
            readOnly={isLoading ? true : false}
            onChange={(e) => handleEventChange(e.target)}
            value={description}
            name='description'
            placeholder='Short Description'
            className=' text-green block bg-transparent border-green border-b-2  w-full rounded h-10 px-3 '
          />
          <input
            type='number'
            readOnly={isLoading ? true : false}
            onChange={(e) => handleEventChange(e.target)}
            value={amountNeeded}
            name='amountNeeded'
            placeholder='Amount Needed'
            className=' text-green block bg-transparent border-green border-b-2  w-full rounded h-10 px-3 '
          />
          <div className='block'>
            <label htmlFor='file' className='text-green mr-5  capitalize '>
              Medical Report*:{" "}
            </label>
            <input
              onChange={handleMedicalReportUpload}
              type='file'
              id='file'
              accept='.jpeg,.jpg,.png'
              name='image'
              readOnly={isLoading ? true : false}
              className=' sm:mt-3 w-4/6 md: mt-0 '
            />
          </div>
        </div>
        <button
          type='submit'
          disabled={isLoading ? true : false}
          className={
            "cursor-pointer capitalize border-2 py-2 px-14  rounded  mx-auto flex my-12 text-green border-green"
          }
        >
          {charityToEdit?.isEditing ? "Save Charity" : "Create Charity"}
        </button>
      </form>
    </section>
  );
}
export default CreateCharitiesPage;
