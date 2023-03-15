function DashBord() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <nav
            id="sidebarMenu"
            class="collapse d-lg-block sidebar collapse bg-white"
          >
            <div class="position-sticky">
              <div class="list-group list-group-flush mx-3 mt-4">
                <a
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple"
                  aria-current="true"
                >
                  <i class="fas fa-tachometer-alt fa-fw me-3"></i>
                  <span>Main dashboard</span>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple active"
                >
                  <i class="fas fa-chart-area fa-fw me-3"></i>
                  <span>Webiste traffic</span>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="fas fa-lock fa-fw me-3"></i>
                  <span>Password</span>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="fas fa-chart-line fa-fw me-3"></i>
                  <span>Analytics</span>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="fas fa-chart-pie fa-fw me-3"></i>
                  <span>SEO</span>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="fas fa-chart-bar fa-fw me-3"></i>
                  <span>Orders</span>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="fas fa-globe fa-fw me-3"></i>
                  <span>International</span>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="fas fa-building fa-fw me-3"></i>
                  <span>Partners</span>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="fas fa-calendar fa-fw me-3"></i>
                  <span>Calendar</span>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="fas fa-users fa-fw me-3"></i>
                  <span>Users</span>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="fas fa-money-bill fa-fw me-3"></i>
                  <span>Sales</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div class="row ms-5">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="row ms-5">
        <div class="col-sm-6">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-lg-6 ps-lg-2 mb-3">
          <div class="card h-lg-100">
            <div class="card-header">
              <div class="row flex-between-center">
                <div class="col-auto">
                  <h6 class="mb-0">Total Sales</h6>
                </div>
                <div class="col-auto d-flex">
                  <select class="form-select form-select-sm select-month me-2">
                    <option value="0">January</option>
                    <option value="1">February</option>
                    <option value="2">March</option>
                    <option value="3">April</option>
                    <option value="4">May</option>
                    <option value="5">Jun</option>
                    <option value="6">July</option>
                    <option value="7">August</option>
                    <option value="8">September</option>
                    <option value="9">October</option>
                    <option value="10">November</option>
                    <option value="11">December</option>
                  </select>
                  <div class="dropdown font-sans-serif btn-reveal-trigger">
                    <button
                      class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                      type="button"
                      id="dropdown-total-sales"
                      data-bs-toggle="dropdown"
                      data-boundary="viewport"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        class="svg-inline--fa fa-ellipsis-h fa-w-16 fs--2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ellipsis-h"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                        ></path>
                      </svg>
                    </button>
                    <div
                      class="dropdown-menu dropdown-menu-end border py-2"
                      aria-labelledby="dropdown-total-sales"
                    >
                      <a class="dropdown-item" href="#!">
                        View
                      </a>
                      <a class="dropdown-item" href="#!">
                        Export
                      </a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item text-danger" href="#!">
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body h-100 pe-0">
              <div
                class="echart-line-total-sales h-100"
                data-echart-responsive="true"
                _echarts_instance_="ec_1678782469907"
              ></div>
              <canvas data-zr-dom-id="zr_0" width="401" height="283"></canvas>
            </div>
            <div className="ab">Mar 15, 50</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashBord;
