import bannerImg from "../../assets/hero-image01.png";
import bookBundle from "../../assets/bundle.png";
import Footer from "../Footer/Footer";
import Banner from "../Home/Banner";
import SubscribeUs from "../Home/SubscribeUs";
import UpcomingBooks from "../Home/UpcomingBooks";

const Books = () => {
  return (
    <div className="books-pg">
      <div className="books-div">
        <h2>Books</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
          dolores!
        </p>
      </div>
      <Banner />
      <div className="series-books">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 banner-div">
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
              </div>
            </div>
            <div className="col-lg-12">
              <div className="series-books-img">
                <div className="series-books-flex">
                  <img src={bannerImg} alt="" />
                  <h5>The Dark Road To Mercy</h5>
                  <button className="button">Purchase</button>
                </div>
                <div className="series-books-flex">
                  <img src={bannerImg} alt="" /> <h5>The Dark Road To Mercy</h5>{" "}
                  <button className="button">Purchase</button>
                </div>{" "}
                <div className="series-books-flex">
                  <img src={bannerImg} alt="" /> <h5>The Dark Road To Mercy</h5>{" "}
                  <button className="button">Purchase</button>
                </div>{" "}
                <div className="series-books-flex">
                  <img src={bannerImg} alt="" /> <h5>The Dark Road To Mercy</h5>{" "}
                  <button className="button">Purchase</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="series-books complete-series-bundle">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 banner-div">
                <div className="series-books-info banner-info">
                  <h2>Buy a Complete Series</h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem .
                  </p>
                  <div className="banner-btn">
                    <button>Buy complete series</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="series-books-img">
                  <div className="series-books-flex">
                    <img src={bookBundle} alt="" />
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
    </div>
  );
};

export default Books;
