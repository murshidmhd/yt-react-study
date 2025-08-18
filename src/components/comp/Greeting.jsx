// function Greeting (pr){

// return(
//     <>
//     <h1> helo {pr.name} and my age is {pr.age}</h1>
//     <button onClick={pr.change}>change text </button>
//     </>
// )
// }

// export default Greeting


import React, { useState } from "react";

function Greeting() {
  // 1. State for form values
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: ""
  });

  // 2. State for errors
  const [errors, setErrors] = useState({});

  // 3. Validation rules
  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("username" in fieldValues)
      temp.username = fieldValues.username
        ? ""
        : "Username is required.";

    if ("email" in fieldValues) {
      temp.email = fieldValues.email
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid."
        : "Email is required.";
    }

    if ("password" in fieldValues) {
      temp.password = fieldValues.password.length >= 6
        ? ""
        : "Password must be at least 6 characters.";
    }

    setErrors({ ...temp });
    // Return true if no errors
    return Object.values(temp).every(x => x === "");
  };

  // 4. Handle input change
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    validate({ [name]: value }); // Validate single field
  };

  // 5. Handle form submit
  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      // Submit form: values contain valid data
      console.log("Form submitted", values);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Username */}
      <div>
        <label>Username</label>
        <input
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
      </div>

      {/* Email */}
      <div>
        <label>Email</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>

      {/* Password */}
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default Greeting;
