import { useState } from "react";
import Input from "./Inout";

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
  const passwordIsInvalid =
    didEdit.password && !enteredValue.password.trim("").length < 8; // validates on every keystroke change

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
        <Input
          id="email"
          label="Email"
          type="email"
          name="email"
          onBlur={handleInputBlur}
          value={enteredValue.email}
          onChange={handleChange}
          error={emailIsInvalid && "please enter a valid email"}
        />
        <Input
          id="password"
          label="Passowrd"
          type="password"
          name="password"
          onBlur={handleInputBlur}
          value={enteredValue.password}
          onChange={handleChange}
          error={passwordIsInvalid && "please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
