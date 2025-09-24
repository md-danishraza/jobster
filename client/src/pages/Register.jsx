import React from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useState, useEffect } from "react";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";
// mutations
import {
  useRegisterUserMutation,
  useLoginUserMutation,
  useRegisterTestUserMutation,
} from "../state/apis/userApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../state/features/userSlice";
function Register() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
  };
  const [values, setValues] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [registerUser, { isRegLoading }] = useRegisterUserMutation();
  const [registerTestUser, { isRegTestLoading }] =
    useRegisterTestUserMutation();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`${name}:${value}`);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    // login if already a member
    if (values.isMember) {
      try {
        const response = await loginUser({
          email: values.email,
          password: values.password,
        }).unwrap();
        dispatch(setUser(response.user));
        return navigate("/");
      } catch (err) {
        console.error("Login failed:", err);
      }
    }

    // if not a member then register
    try {
      const response = await registerUser({
        email: values.email,
        password: values.password,
      }).unwrap();
      dispatch(setUser(response.user));
      return navigate("/");
    } catch (err) {
      console.error("register failed:", err);
    }
  };

  // registering test user
  const registerTest = async () => {
    try {
      const response = await registerTestUser().unwrap();
      dispatch(setUser(response.user));
      return navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>

        {/* name field if not a member */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type="email"
          name={"email"}
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type="password"
          name={"password"}
          value={values.password}
          handleChange={handleChange}
        />

        <button
          type="submit"
          className="btn btn-block"
          disabled={isLoading || isRegLoading}
        >
          {isLoading || isRegLoading ? "submitting" : "submit"}
        </button>
        <button
          className="btn btn-block"
          disabled={isRegTestLoading}
          onClick={registerTest}
          type="button"
        >
          {isRegTestLoading ? "Letting you In" : "Test User"}
        </button>

        {/* toggle btn  */}
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}

          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
