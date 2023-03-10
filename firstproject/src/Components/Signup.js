import { useState } from "react";

function Signup(props) {
  console.log(">>>>>>props ", props);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);
    const data = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    const stringifyData = JSON.stringify(data);

    localStorage.setItem("data", stringifyData);
    console.log(">>>>>>data ", data);
    console.log(">>>>>>data ", JSON.stringify(data));
  };
  return (
    <div className="App">
      <div className="container-fluid sectio">
        <div className="Longdiv">
          <div className="Shortdiv">
            <div className="Mini">
              <h1>Sign In</h1>
            </div>
          </div>
          <div className="loginform">
            <form onSubmit={onSubmitForm}>
              <input className="input"
                type="email"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br /> <br />
              <input className="input"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />
              <br />
              <input className="input"
                type="password"
                placeholder="ConfarmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <br /> <br />
              <button className="but" type="sumbit">
                Sign In
              </button>
              <br />
              <br />
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>{" "}
              </a>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-google-plus" aria-hidden="true"></i>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
