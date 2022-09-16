import React, { useEffect, useState,useRef } from "react";

import { useNavigate } from "react-router-dom";
import { Grid, Paper ,Avatar, Typography, TextField, Button} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'; 

function AdminLogin() {

  const inputRef=useRef(null)

  const navigate = useNavigate();

  const [errEmail, setErrEmail] = useState("");
  const [errPass, setErrPass] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const paperStyle={padding:'30px 20px',width:400,margin :"20px auto"}
    const headerStyle={margin:0}
    const avatarStyle={backgroundColor:'#1bbd7e'}

  const handleEmail = () => {
    if (email === "" || email === " ") {
      setErrEmail("Email cannot be empty");
      return false;
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setErrEmail("Enter a proper email");
      return false;
    } else {
      setErrEmail("");
      return true;
    }
  };
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  useEffect(()=>{
    const userInfo =localStorage.getItem("adminInfo");
    if(userInfo){
      navigate('/admin/home')
    }
  })
  

  const handlePass = () => {
    if (password === "" || password === "  ") {
      setErrPass("password cannot be empty");
      return false;
    } else if (password.length < 3) {
      setErrPass("password must be 3 letters");
      return false;
    } else {
      setErrPass("");
      return true;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!handlePass() && !handleEmail()) {
    } else {
      console.log("login success");

      const admin = {
        email: "admin@gmail.com",
        password: "123",
      };
      if (email == admin.email && password == admin.password) {
        localStorage.setItem("adminInfo", JSON.stringify(admin));
        navigate("/admin/home");
      } else if (email != admin.email) {
        setErrEmail("Email is invalid");
      } else if (password != admin.password) {
        setErrPass("Password is invalid");
      }
    }
    // let email = e.target.elements.email?.value;
    // let password = e.target.elements.password?.value;

    console.log(email, password);
  };
  return (
    
    // <div className="h-screen flex bg-gray-bg1">
    //   <div className="w-full max-w-md m-auto bg-white rounded-3xl border border-primaryBorder   shadow-2xl py-10 px-16">
    //     <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
    //       Log in to your account 
    //     </h1>
    <div>
    <Grid style={{marginTop:'100px'}}>
       {/* to give shadow for paper ,add a property called elevation */}
     <Paper elevation={20} style={paperStyle}>
       <Grid align="center">
           <Avatar style={avatarStyle}>
           <AddCircleOutlineOutlinedIcon/>
           </Avatar>
           <h2 style={headerStyle}>LogIn</h2>
           <Typography variant='caption'>Please enter your User name and Password</Typography>
       </Grid>
       

        <form onSubmit={handleFormSubmit} style={{marginTop:'10px'}}>
          <div>
            <label htmlFor="email">Email</label>
            <span className="text-red-600 "> {`:    ${errEmail}`}</span>
            <input
              onKeyUp={() => {
                handleEmail();
              }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              ref={inputRef}
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <span className="text-red-600 "> {`:    ${errPass}`}</span>

            <input
              onKeyUp={() => {
                handlePass();
              }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              placeholder="Your Password"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              className={`bg-green py-2 px-4 text-sm text-black font-bold rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Login
            </button>
          </div>
        </form>
        </Paper>
     </Grid>
    </div>
  );
}

export default AdminLogin;
