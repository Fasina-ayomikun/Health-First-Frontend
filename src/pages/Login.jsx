import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { uploadImage } from "../features/files/filesSlice";
import { loginUser } from "../features/user/userSlice";
import Loading from "../utils/Loading";
import ShowPassword from "../utils/ShowPassword";
const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  password2: "",
};
function Login() {
  const [value, setValue] = useState(initialValue);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const { isLoading, user } = useSelector((store) => store.user);
  //   const { image } = useSelector((store) => store.files);
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
  const loginNewUser = (e) => {
    e.preventDefault();
    dispatch(loginUser(value));
    setValue(initialValue);
  };

  const navigate = useNavigate();
  const handleFileUpload = (input) => {
    const file = input.files[0];
    formData.append("image", file);
    // dispatch(uploadImage(formData));
  };
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
    <section className='max-w-md   mx-auto py-8 sm:px-8 lg:px-0 mt-20'>
      <h3 className='text-3xl font-semibold capitalize text-center my-4 text-grey'>
        login
      </h3>

      <form
        autoComplete='off'
        onSubmit={(e) => {
          loginNewUser(e);
        }}
      >
        <div className='mt-10'>
          {" "}
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
        </div>
        <button
          type='submit'
          //   disabled={isLoading ? true : null}
          className='capitalize border-2 py-2 px-14  rounded  mx-auto flex my-12 text-black border-green'
        >
          Login
        </button>
      </form>
      <p className='text-black text-center text-sm'>
        Don't have an account?{" "}
        <Link className=' text-green underline' to='/sign-up'>
          Sign Up
        </Link>
      </p>
    </section>
  );
}
export default Login;
