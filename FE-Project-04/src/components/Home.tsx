import React from "react"
import {Link} from 'react-router-dom'

function Home() {
  return (
    // hero
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.outdoor-insight.co.uk/wp-content/uploads/2023/02/HIGHLANDER-Lake-District-2023-UK-Launch-1-Credit-Stefan-Bedaic-002.jpg" className="d-block w-100" alt="home1" />
            <div className="carousel-caption position-absolute top-50 start-50 translate-middle">
              <h5>Explore Our Trails</h5>
              <p>Some representative placeholder content for the first slide.</p>
              <p>
                <a href="#" className="btn btn-warning mt-3"><Link to="/trails" className="btn">Explore</Link></a>
                </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://www.planetware.com/photos-large/USTX/texas-big-bend-national-park-santa-elena-canyon-with-waders.jpg" className="d-block w-100" alt="home2" />
            <div className="carousel-caption position-absolute top-50 start-50 translate-middle">
              <h5>Find Your Inspiration</h5>
              <p>Some representative placeholder content for the second slide.</p>
              <p><a href="#" className="btn btn-warning mt-3"><Link to="/trails" className="btn">Explore</Link></a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.britannica.com/94/125794-050-FB09B3F4/Hikers-Gore-Range-Mountains-Denver.jpg" className="d-block w-100" alt="home3" />
            <div className="carousel-caption position-absolute top-50 start-50 translate-middle">
              <h5>Discover More</h5>
              <p>Some representative placeholder content for the third slide.</p>
              <p><a href="#" className="btn btn-warning mt-3"><Link to="/trails" className="btn">Explore</Link></a></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* About */}
      <section id="about" className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="about-img">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/White_Cliffs_of_Dover_02.JPG" alt="" className="img-fluid"></img>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 ps-lg-5 pb-10">
              <div className="about-text">
                <h2>Find Out More About<br />Our Mission</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a href="#" className="btn btn-warning mt-3"><Link to="/about" className="btn">Learn More</Link> </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
            <div className="section-header text-center pb-5">
              <h2>Our Services</h2>
              <p>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="col-12 col-md-12 col-lg-3">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
              <i className="bi bi-subtract"></i>
              <h3 className="card-title">Heading</h3>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor</p>
              <button className="btn btn-warning text-dark">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-3">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
              <i className="bi bi-slack"></i>
              <h3 className="card-title">Heading</h3>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor</p>
              <button className="btn btn-warning text-dark">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-3">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
              <i className="bi bi-nut"></i>
              <h3 className="card-title">Heading</h3>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor</p>
              <button className="btn btn-warning text-dark">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about section-padding">
      <div className="container">
      <div className="col-md-12">
      <div className="section-header text-center pb-5">
              <h2>Locations</h2>
              <p>Use our maps service to find out<br /> how far you are from your next adventure. </p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9552279.402160572!2d-13.429889057193153!3d54.231428316875515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2suk!4v1677341051104!5m2!1sen!2suk" width="600" height="450" style= {{border:"0"}}  loading="lazy" ></iframe>
            </div>
      </div>
      </div>
      </section>
    </div>
  )
}

export default Home
