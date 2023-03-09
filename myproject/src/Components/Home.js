function home() {
  return (
    <div className="coaniter">
      <div className="header">
        <div className="logo">
          <img src="download.jpg.png" alt="" />
        </div>
        <div className="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="/Signup">Sign In</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>

            <a href="/Login">
              <button>Log In</button>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default home;
