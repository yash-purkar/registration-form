const Registration = () => {
  return (
    <>
      <h1>Register Now</h1>
      <form action="">
        <label htmlFor="userName">Enter Your Full Name</label>
        <br />
        <input type="text" name="userName" id="userName" />
        <br />
        <br />

        <label htmlFor="email">Enter Email Id</label>
        <br />
        <input type="text" name="email" id="email" />
        <br />
        <br />

        <label htmlFor="phone">Enter Phone Number</label>
        <br />
        <input type="text" name="phone" id="phone" />
        <br />
        <br />

        <label htmlFor="password">Enter Password</label>
        <br />
        <input type="text" name="password" id="password" />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  )
}

export default Registration;