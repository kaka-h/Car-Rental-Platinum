import React, { useState } from "react";
import SignIn from "../../components/signin";
import SignUp from "../../components/signup";

const Register = () => {
  const [isLogged, setIsLogged] = useState(false);
  const pull_data = (data) => {
    setIsLogged(data);
  };

  return (
    <div>
      {!isLogged ? <SignIn func={pull_data} /> : <SignUp func={pull_data} />}
    </div>
  );
};
export default Register;
