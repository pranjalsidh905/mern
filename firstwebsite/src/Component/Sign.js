// import { useState } from "react";
// function Sign(props) {
//   console.log(">>>>>>props ", props);
//   let [email, setEmail] = useState("");
//   let [password, setPassword] = useState("");

//   const onSubmitForm = (e) => {
//     e.preventDefault();
//     console.log(email, password);
//     const info = {
//       email: email,
//       password: password,
//     };

//     const gfhjfjgkjgk = JSON.stringify(info);

//     localStorage.setItem("info", gfhjfjgkjgk);
//     console.log(">>>>>>data ", info);
//     console.log(">>>>>>data ", JSON.stringify(info));
//   };
//   return (
//     <div>
//       <header class="showcase">
//         <div class="logo1">
//           <img src="https://i.ibb.co/r5krrdz/logo.png" />
//         </div>

//         <div class="showcase-content">
//           <div class="formm">
//             <form onSubmit={onSubmitForm}>
//               <h1>Sign In</h1>
//               <div class="info">
//                 <input
//                   class="email"
//                   type="email"
//                   placeholder="Email or phone number"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />{" "}
//                 <br />
//                 <input
//                   class="email"
//                   type="password"
//                   placeholder="Password"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <div class="btn1">
//                 <button class="btn-primary-1" type="submit">
//                   Sign In
//                 </button>
//               </div>
//               <div class="help">
//                 <div>
//                   <input value="true" type="checkbox" />
//                   <label>Remember me</label>
//                 </div>

//                 <a href="https://www.netflix.com/dz-en/LoginHelp">
//                   Need Help ?
//                 </a>
//               </div>
//             </form>
//           </div>

//           <div class="fcbk">
//             <a href="https://facebook.com">
//               <img
//                 src="https://i.ibb.co/LrVMXNR/social-fb.png"
//                 alt="Facebook"
//               />
//             </a>
//             <p>Login with Facebook</p>
//           </div>
//           <div class="signup">
//             <p>New to Netflix ?</p>
//             <a href="https://www.netflix.com/dz-en/">Sign up now</a>
//           </div>
//           <div class="more">
//             <p>
//               This page is protected by Google reCAPTCHA to ensure you're not a
//               bot. <a href="#">Learn more.</a>
//             </p>
//           </div>
//         </div>

//         <footer>
//           <div class="ftr-content">
//             <div class="contact">
//               <a href="#">Quesions? Contact us.</a>
//             </div>
//             <div class="ftr">
//               <a href="#">Gift Card Terms</a>
//               <a href="#">Terms of Use</a>
//               <a href="#">Privacy Statement</a>
//             </div>
//             <div class="select">
//               <select>
//                 <option>English</option>
//                 <option>العربية</option>
//                 <option>Français</option>
//               </select>
//             </div>
//           </div>
//         </footer>
//       </header>
//     </div>
//   );
// }
// export default Sign;
