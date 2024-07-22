import bannerImg from "../../assets/hero-image01.png";

const Banner = () => {
  return (
    <div className="home-pg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 banner-div">
            <div className="banner-info">
              <span>New Release</span>
              <h1>This Dark Road Lead to Mercy</h1>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <div className="banner-btn">
                <button>$0.0 - Purchase</button>{" "}
                <button className="read-on-btn">Read on Kindle</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-img">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
