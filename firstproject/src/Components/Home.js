import carousel from "../images/carousel-1.jpg";
import carousel2 from "../images/carousel-2.jpg";
import carousel3 from "../images/carousel-3.jpg";
function Home() {
  return (
    
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div
            id="myCarousel"
            class="carousel slide oerlay-bottam"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={carousel} class="d-block w-100 h-100" alt="photo1" />

                <h1>Pranjal</h1>
              </div>
              <div class="carousel-item">
                <img src={carousel2} class="d-block w-100" alt="photo2" />
              </div>
              <div class="carousel-item">
                <img src={carousel3} class="d-block w-100" alt="photo3" />
              </div>
            </div>

            <a
              href="#myCarousel"
              class="carousel-control-prev"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a
              href="#myCarousel"
              class="carousel-control-next"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
