import React, { useState } from "react";
import Register from "../../components/Register";
import Login from "../../components/Login";

const Registerpage = () => {
  const [isLogged, setIsLogged] = useState(false);
  const pull_data = (data) => {
    setIsLogged(data);
  };

  return (
    <div>
      {!isLogged ? <Login func={pull_data} /> : <Register func={pull_data} />}
    </div>
  );
};
export default Registerpage;
