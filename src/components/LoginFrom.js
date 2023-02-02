import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = ({ signIn }) => {
  const initialLoginForm = { username: "", password: "" };
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdUserToken = await signIn(loginForm);

    if (createdUserToken) {
      navigate("/home");
    } else {
      navigate("/");
    }
    setLoginForm(initialLoginForm);
  };

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="username" className="form-label mb-2">
          Username:
        </label>
        <input
          className="form-field"
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={loginForm.username}
          onChange={handleChange}
        />

        <label htmlFor="password" className="form-label mb-2">
          password:
        </label>
        <input
          className="form-field"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={loginForm.password}
          onChange={handleChange}
        />
        <button type="submit" className="form-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
