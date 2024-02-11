import { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [empty, setEmpty] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
    setEmpty("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
    setEmpty("");
  };

  const handleLogin = async () => {
    setLoading(true);
    if (!email || !password) {
      setEmpty("Password and email must be filled in");
      setLoading(false);
      return;
    }
    try {
      const payload = {
        email,
        password,
      };
      const response = await axios.post(
        "https://api-car-rental.binaracademy.org/admin/auth/login",
        payload
      );
      setLoading(false);
      navigate("/admin");
      localStorage.setItem("token", response.data.access_token);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <>
      <section>
        <div className="row min-vh-100">
          <div className="col-lg-8 left"></div>
          <div className="col-lg-4 d-flex justify-content-center ">
            <div className="right">
              <div className="logo"></div>
              <h1 className="title-signin">Welcome, Admin BCR</h1>
              {error && <p>{error}</p>}
              {empty && <p>{empty}</p>}
              <form action="">
                <div className="d-flex flex-column mb-3">
                  <label htmlFor="" className="mb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: johndee@gmail.com"
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="" className="mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="6+ caracter"
                    onChange={handlePasswordChange}
                  />
                </div>
               
                  <button className="text-center tombol-login-admin" onClick={handleLogin} disabled={loading} >
                    {loading ? "loading..." : "Sign In"}
                  </button>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
