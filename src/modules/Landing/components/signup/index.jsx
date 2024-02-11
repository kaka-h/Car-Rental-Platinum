import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../../assets/image/logo.png";
import * as requestAPI from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import {
  disableButton,
  enableButton,
  isLoading,
} from "../../features/detail/detailSlice";
import classNames from "classnames";

const SignUp = (props) => {
  const state = useSelector((state) => state.detail);
  const { loading } = useSelector((state) => state.detail);

  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const className = classNames({
    //nama class : condition
    disabled: !state.is_disabled,
    disabled_loading: loading,
    null: state.is_disabled,
  });

  const handleChange = (e) => {
    dispatch(enableButton());
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    if (!form.name && !form.email && !form.password) {
      dispatch(disableButton());
    }
  }, [state.is_disabled, form.name, form.email, form.password]);

  const handleSignIn = () => {
    props.func(false);
  };

  const handleSubmit = async () => {
    dispatch(isLoading());
    try {
      const res = await requestAPI.register(form);
      alert("Register Berhasil Berhasil");
      dispatch(isLoading());
      props.func(false); // sign in component will show
    } catch (error) {
      dispatch(isLoading());
      if (!form.name.length) {
        alert("Nama tidak boleh kosong");
      } else if (!form.email.length) {
        alert("email tidak boleh kosong");
      } else if (!form.password.length) {
        alert("password tidak boleh kosong");
      } else if (form.email.length) {
        alert(error.response.data.message);
      } else if (form.password.length) {
        alert(error.response.data.error.message);
      }
    }
  };

  return (
    <div className="register mx-auto">
      <div className="sign-page ">
        <div className="container-fluid">
          <div className="row">
            <div className="login-area col-xl-6 ">
              <div className="logo-register">
                <a href={"/"}>
                  <img src={Logo} alt="" />
                </a>
              </div>
              <h1 className="title">Sign Up</h1>
              <div className="mb-2  ">
                <label className="form-label">Name*</label>
                <input
                  onChange={handleChange}
                  name="name"
                  type="name"
                  className="form-control mb-3"
                  id="exampleFormControlInput1"
                  placeholder="Nama Lengkap"
                />
              </div>
              <div className="mb-2  ">
                <label className="form-label">Email*</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  className="form-control mb-3"
                  id="exampleFormControlInput1"
                  placeholder="Contoh: johndee@gmail.com"
                />
              </div>
              <div>
                <label className="form-label">Create Password*</label>
                <input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  id="inputPassword5"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  placeholder="6+ Karakter"
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={!state.is_disabled}
                className={className}>
                Sign Up
              </button>
              <h6 className="text-center">
                Don't have an account?{" "}
                <span onClick={handleSignIn}>Sign in here</span>
              </h6>
            </div>
            <div className="bg col-xl-6">
              <h1 className="ms-5">Binar Car Rental</h1>
              <div className="img ms-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
