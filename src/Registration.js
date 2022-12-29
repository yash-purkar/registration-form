import React, { useState } from 'react';
const Registration = () => {

  const [registerUser, setRegisterUser] = useState({
    userName: "",
    email: "",
    phone: "",
    password: ""
  });

  const [records, setrecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setRegisterUser({ ...registerUser, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(registerUser)

    if (registerUser.userName.length > 0 && registerUser.email.length > 0 && registerUser.phone.length > 0 && registerUser.password.length > 0) {
      setrecords([...records, registerUser]);
      console.log(records);
      setRegisterUser({
        userName: "",
        email: "",
        phone: "",
        password: ""
      })
    }
    else {
      alert("Plzz fill all the fields first.");
    }
  }

  return (
    <>
      <h1>Register Now</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="userName">Enter Your Full Name</label>
        <br />
        <input type="text" value={registerUser.userName} name="userName" id="userName" autoComplete="off" onChange={handleInput} />
        <br />
        <br />

        <label htmlFor="email">Enter Email Id</label>
        <br />
        <input type="email" value={registerUser.email} name="email" id="email" autoComplete="off" onChange={handleInput} />
        <br />
        <br />

        <label htmlFor="phone">Enter Phone Number</label>
        <br />
        <input type="number" value={registerUser.phone} name="phone" id="phone" autoComplete="off" onChange={handleInput} />
        <br />
        <br />

        <label htmlFor="password">Enter Password</label>
        <br />
        <input type="password" value={registerUser.password} name="password" id="password" autoComplete="off" onChange={handleInput} />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>

      <div>
        {
          records.map((currElem) => {
            return (
              <h1>{currElem.userName} {currElem.email} {currElem.phone} {currElem.password} </h1>
            )
          })
        }
      </div>
    </>
  )
}

export default Registration;