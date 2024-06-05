import { useState } from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValue.email.includes("@"); // validates on every keystroke change

  function handleChange(event) {
    setEnteredValue((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [event.target.name]: false,
    }));
  }

  function handleInputBlur(event) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [event.target.name]: true,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // prevent page from reloading
    console.log(enteredValue);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={handleInputBlur}
            value={enteredValue.email}
            onChange={handleChange}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValue.password}
            onChange={handleChange}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
