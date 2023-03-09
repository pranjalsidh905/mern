import { useState } from "react";

function login(props) {
  console.log(">>>>>>props ", props);
  let [name, setName] = useState(props.name);
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState();
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(name, email, phone, password, confirmPassword);
    const data = {
      name: name,
      phone: phone,
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
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1>Login</h1>
      <form onSubmit={onSubmitForm}>
        <div>
          {/* <label>email</label> */}

          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          {/* <label>Password</label> */}

          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button style={{ margin: "10px" }} type="submit">
          Submit
        </button>
      </form>
      {/* <button onClick={() => onChangeName()}>Change Name</button> */}
      {/* <Login /> */}
    </div>
  );
}

export default login;
