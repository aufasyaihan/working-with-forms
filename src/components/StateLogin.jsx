import Input from "./Inout";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import useInput from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value)); // validates on every keystroke change
  const {
    value: passwordValue,
    handleChange: handlePassowrdChange,
    handleInputBlur: handlePassowrdBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 8)); // validates on every keystroke change

  function handleSubmit(event) {
    event.preventDefault(); // prevent page from reloading

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log({ email: emailValue, password: passwordValue });
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
          onBlur={handleEmailBlur}
          value={emailValue}
          onChange={handleEmailChange}
          error={emailHasError && "please enter a valid email"}
        />
        <Input
          id="password"
          label="Passowrd"
          type="password"
          name="password"
          onBlur={handlePassowrdBlur}
          value={passwordValue}
          onChange={handlePassowrdChange}
          error={passwordHasError && "please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
