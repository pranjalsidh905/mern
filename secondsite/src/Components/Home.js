import logo from "./image/logo.png";
import Pranjal from "./image/user-icon.png";
import User from "./image/bag-icon.png";
import Sec from "./image/search-icon.png";
var Home = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
         
        <div class="navbar navbar-light bg-light">
            <div class="col-md-2 order-1">
          <div>
            <img src={logo} />
          </div>
            </div> 
            <div class="col-md-2 order-2">
          <div>
          
            <img src={Pranjal} />
            <img src={User} />
            <img src={Sec} />
          </div>
            </div> 
    
          <div class="menu-wrap">
            <input type="checkbox" class="toggler" />
            <div class="hamburger">
              <div></div>
            </div>
            <div class="menu">
              <div>
                <div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Home;
