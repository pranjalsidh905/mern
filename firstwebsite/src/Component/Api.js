// import { useEffect, useState } from "react";
// import axios from "axios";

// const Api = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     var pranjal = async () => {
//       var sharma = await axios.get("https://dummyjson.com/products");

//       console.log(sharma);
//       setData(sharma.data.products);
//     };
//     pranjal();
//   }, []);
//   useEffect(() => {
//     var a = async () => {
//       var b = await axios.get("");
//     };
//   });

//   return (
//     <div className="container">
//       {data.map((item) => (
//         <div>
//           <img src={item.thumbnail} />
//           <h2> id:{item.id}</h2>
//           <p> Title:{item.title}</p>
//           <p> Price:{item.price}</p>
//           <p> brand: {item.brand}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Api;
