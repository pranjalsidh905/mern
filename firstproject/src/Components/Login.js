import { useState } from "react";
function Login(props) {
  console.log(">>>>>>>>>props", props);
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  const onSubmitFrom = (e) => {
    e.preventDefault();
    console.log(email, password);
    const data = {
      email: email,
      password: password,
    };

    const stringifyData = JSON.stringify(data);

    localStorage.setItem("data", stringifyData);
    console.log(">>>>>>data ", data);
    console.log(">>>>>>data ", JSON.stringify(data));
  };
  return (
    <div className="App">
      <div class="container-fluid sectio">
        <div class="Longdiv">
          <div class="Shortdiv">
            <div class="Mini">
              <h1>Log in</h1>

              <a href="#">
                <i class="fa fa-facebook" aria-hidden="true"></i>{" "}
              </a>
              <a href="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-google-plus" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div class="loginform">
            <form onSubmit={onSubmitFrom}>
              <input
                className="input"
                type="text"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <br />
              <input
                className="input"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />

              <button class="but" type="submit">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
