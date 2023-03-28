const Header = () => {
return (
<div class="container-fluid">
  <div class="row py-3">
    <div class="col">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a href="" class="navbar-brand">
          Sharma
        </a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="/" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                About Us
              </a>
            </li>
            <li class="nav-item dropdown">
              <a href="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Service
              </a>
              <ul class="dropdown-menu">
                <a href="" class="dropdown-item">
                  Line one
                </a>
                <a href="" class="dropdown-item">
                  Line two
                </a>
                <a href="" class="dropdown-item">
                  Line three
                </a>
              </ul>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a href="/Signup" class="nav-link">
                Signup
              </a>
            </li>
            <li class="nav-item">
              <a href="/login" class="nav-link">
                Login
              </a>
            </li>



          </ul>



        </div>

      </nav>
    </div>
  </div>
</div>

);
}
export default Header;