import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./access.styles.scss";

const Access = () => (
  <div className="access">
    <SignIn />
    <SignUp />
  </div>
);

export default Access;
