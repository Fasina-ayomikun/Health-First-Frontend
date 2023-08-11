import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import Charities from "./pages/Charities";
import SignUpPage from "./pages/SignUp";
import Login from "./pages/Login";

import { ToastContainer } from "react-toastify";
import ProfilePage from "./pages/ProfilePage";
import CreateCharitiesPage from "./pages/CreateCharityPage";
import SingleCharityPage from "./pages/SIngleCharityPage";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/charities' element={<Charities />}></Route>
        <Route path='/charities/:id' element={<SingleCharityPage />}></Route>
        <Route path='/sign-up' element={<SignUpPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/add' element={<CreateCharitiesPage />}></Route>
        <Route path='/edit/:id' element={<CreateCharitiesPage />}></Route>
        <Route path='/profile/:id' element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
