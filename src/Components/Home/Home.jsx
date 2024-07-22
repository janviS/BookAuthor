import "./Home.css";
import bannerImg from "../../assets/hero-image01.png";
import featuredLogo from "../../assets/featured-logo3.svg";
import featuredLogo1 from "../../assets/featured-logo1.svg";
import aboutImage from "../../assets/about-image.png";
import bookIMg2 from "../../assets/book-cover2.png";
import testimonialImg from "../../assets/testimonials-image.png";
import Banner from "./Banner";
import UpcomingBooks from "./UpcomingBooks";
import SubscribeUs from "./SubscribeUs";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="featured-body">
        <div className="container">
          <div className="row">
            <div className="as-featured-div">
              <h3>As Featured on</h3>
              <div className="featured-div-img">
                <img src={featuredLogo1} alt="" />
                <img src={featuredLogo} alt={featuredLogo} />
                <img src={featuredLogo1} alt="" />
                <img src={featuredLogo} alt={featuredLogo} />
                <img src={featuredLogo1} alt={featuredLogo} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-author">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="author-img">
                  <img src={aboutImage} alt="" />
                </div>
              </div>
              <div className="col-lg-7 author-info">
                <div className="author-words">
                  <h3>A word from the author</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum ullam deleniti facilis odit mollitia officia
                    ducimus velit nobis at blanditiis autem, veniam labore,
                    neque dicta optio iusto hic fugiat! Esse! Lorem, ipsum dolor
                    sit amet consectetur adipisicing elit. Voluptatum ullam
                    deleniti facilis odit mollitia officia ducimus velit nobis
                    at blanditiis autem, veniam labore, neque dicta optio iusto
                    hic fugiat! Esse!
                  </p>

                  <div className="readmore-author-btn">
                    <button>Read More</button>
                  </div>
                  <hr />
                  <div className="author-name">King Tons</div>
                  <div className="author-title">
                    <span>Frontend Developer</span>
                    <span>Backend Developer</span>
                    <span>Full-Stack Developer</span>
                  </div>
                  <div className="author-social-links">
                    <i className="fa fa-brands fa-instagram"></i>
                    <i className="fa fa-brands fa-youtube"></i>
                    <i className="fa fa-brands fa-telegram"></i>
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="series-books">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 banner-div">
              <div className="series-books-info banner-info">
                <span>Complete Series</span>
                <h2>SMOKE AND THE HEART</h2>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
                <div className="banner-btn">
                  <button>Buy complete series</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="series-books-img">
                <div className="series-books-flex">
                  <img src={bannerImg} alt="" /> <img src={bookIMg2} alt="" />{" "}
                </div>
                <div className="series-books-flex">
                  <img src={bookIMg2} alt="" /> <img src={bannerImg} alt="" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 reviews-heading">
              <div className="">
                <h3>What readers are saying</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
                  molestiae!
                </p>
                <button className="banner-btn button">Read All</button>
              </div>
            </div>
            <div className="col-lg-8 review-testimonial">
              <div className="review-blocks">
                <div className="review-block">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus totam in perspiciatis molestiae, voluptates
                    aperiam at aliquid omnis excepturi impedit! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="testimonial-details">
                    <img src={testimonialImg} alt="" />
                    <div className="testimonial-name">
                      <b>Mike Anderson </b> <br />
                      Review on book 1{" "}
                    </div>
                  </div>
                </div>
                <div className="review-block review-block-mobile">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus totam in perspiciatis molestiae, voluptates
                    aperiam at aliquid omnis excepturi impedit! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="testimonial-details">
                    <img src={testimonialImg} alt="" />
                    <div className="testimonial-name">
                      <b>Mike Anderson</b> <br />
                      Review on book 1{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="review-blocks review-blocks-2">
                <div className="review-block">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus totam in perspiciatis molestiae, voluptates
                    aperiam at aliquid omnis excepturi impedit! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="testimonial-details">
                    <img src={testimonialImg} alt="" />
                    <div className="testimonial-name">
                      <b> Mike Anderson</b> <br />
                      Review on book 1{" "}
                    </div>
                  </div>
                </div>
                <div className="review-block review-block-mobile">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus totam in perspiciatis molestiae, voluptates
                    aperiam at aliquid omnis excepturi impedit! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="testimonial-details">
                    <img src={testimonialImg} alt="" />
                    <div className="testimonial-name">
                      <b> Mike Anderson </b>
                      <br />
                      Review on book 1{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpcomingBooks />
      <SubscribeUs />
      <Footer />
    </>
  );
};

export default Home;
