import React from "react";
import {
  useUserDispatchContext,
  useUserStateContext,
} from "../../context/UserContext";
import { register, tests } from "../../services/user/register";

const Register = () => {
  const userState = useUserStateContext();
  const userDispatch = useUserDispatchContext();

  const [formData, setFormData] = React.useState();

  return (
    <>
      <h1>Register</h1>
      <button
        onClick={() => {
          tests();
        }}
      >
        okokok
      </button>
      <form
        method={"post"}
        onSubmit={e => {
          e.preventDefault();
          register(formData, userState, userDispatch);
        }}
      >
        <label>
          First name
          <input
            type="text"
            name={"firstName"}
            onChange={e => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            name={"lastName"}
            onChange={e => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name={"email"}
            onChange={e => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />
        </label>
        <label>
          <input
            type="password"
            name={"password"}
            onChange={e => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />
        </label>
        <input type="submit" value={"Register"} />
      </form>
    </>
  );
};

export default Register;
