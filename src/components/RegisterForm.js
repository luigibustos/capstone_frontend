import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterForm = ({ signUp }) => {
  const initialRegisterForm = { username: "", email: "", password: "" };
  const [registerForm, setRegisterFrom] = useState(initialRegisterForm);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdUserToken = await signUp(registerForm);

    if (createdUserToken) {
      navigate("/home");
    } else {
      navigate("/");
    }
    setRegisterFrom(initialRegisterForm);
  };

  const handleChange = (e) => {
    setRegisterFrom({ ...registerForm, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          className="form-field"
          type="text"
          id="username"
          name="username"
          autoComplete="username"
          placeholder="username"
          value={registerForm.username}
          onChange={handleChange}
        />
        <label htmlFor="email" className="form-label">
          email:
        </label>
        <input
          className="form-field"
          type="text"
          id="email"
          name="email"
          placeholder="your@email.com"
          value={registerForm.email}
          onChange={handleChange}
        />
        <label htmlFor="password" className="form-label">
          password:
        </label>
        <input
          className="form-field"
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          placeholder="password"
          value={registerForm.password}
          onChange={handleChange}
        />
        <button type="submit" className="form-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
