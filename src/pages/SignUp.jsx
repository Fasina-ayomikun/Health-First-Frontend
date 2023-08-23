import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../features/user/userSlice";
import Loading from "../utils/Loading";
import ShowPassword from "../utils/ShowPassword";
const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  password2: "",
};
function SignUpPage() {
  const [value, setValue] = useState(initialValue);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const formData = new FormData();

  const clicked = useRef(true);

  const handleChange = (input) => {
    const name = input.name;
    const newValue = input.value;
    setValue((oldValues) => {
      oldValues[name] = newValue;
      return oldValues;
    });
  };
  const registerNewUser = (e) => {
    e.preventDefault();
   
    if (value.password !== value.password2) {
      toast.warning("Passwords do not match");
    } else {
      dispatch(registerUser(value));
      setValue(initialValue);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (clicked.current) {
      clicked.current = false;
    } else {
      if (user.email) {
        setTimeout(() => {
          navigate("/");

          window.location.reload();
        }, 1000);
      }
    }
  }, [user]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className='max-w-xl   mx-auto  py-8  lg:px-0 md:w-4/5 sm:w-9/12'>
      <h3 className='text-3xl font-semibold capitalize text-center my-4 text-black'>
        Register
      </h3>

      <form
        autoComplete='off'
        onSubmit={(e) => {
          registerNewUser(e);
        }}
      >
        <div className='mt-6 grid lg:grid-cols-2 sm:grid-cols-1 gap-10'>
          <input
            autoComplete='off'
            type='text'
            name='firstName'
            onChange={(e) => handleChange(e.target)}
            placeholder='First Name'
            className='mb-5 text-black block bg-transparent border-green border-b-2  w-full rounded h-10 px-3 '
          />
          <input
            type='text'
            name='lastName'
            autoComplete='off'
            onChange={(e) => handleChange(e.target)}
            placeholder='Last Name'
            className='mb-5 text-black block bg-transparent border-green border-b-2  w-full rounded h-10 px-3 '
          />
          <input
            type='email'
            name='email'
            autoComplete='off'
            onChange={(e) => handleChange(e.target)}
            placeholder='Email'
            className='mb-5 text-black block bg-transparent border-green border-b-2  w-full rounded h-10 px-3 '
          />

          <div className=' mb-5 flex items-center gap-1 bg-transparent h-10 border-green border-b-2 rounded'>
            <input
              type={`${showPassword ? "text" : "password"}`}
              name='password'
              autoComplete='off'
              onChange={(e) => {
                handleChange(e.target);
              }}
              placeholder='Password'
              className='text-black block    bg-transparent  w-full h-full px-3 '
            />
            <ShowPassword
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          </div>
          <div className=' mb-5 flex items-center gap-1 bg-transparent h-10 border-green border-b-2 rounded'>
            <input
              type={`${showPassword2 ? "text" : "password"}`}
              name='password2'
              autoComplete='off'
              onChange={(e) => handleChange(e.target)}
              placeholder='Confirm Password'
              className=' text-black block bg-transparent w-full h-full px-3 '
            />
            <ShowPassword
              showPassword={showPassword2}
              setShowPassword={setShowPassword2}
            />
          </div>
        </div>
        <button
          type='submit'
          disabled={isLoading ? true : null}
          className='capitalize border-2 py-2 px-14  rounded  mx-auto flex my-12 text-black border-green'
        >
          Register
        </button>
      </form>
      <p className='text-black text-center text-sm'>
        Already have an account?{" "}
        <Link className=' text-green underline' to='/login'>
          Login
        </Link>
      </p>
    </section>
  );
}
export default SignUpPage;
