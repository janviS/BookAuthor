import bannerImg from "../../assets/hero-image01.png";

const UpcomingBooks = () => {
  return (
    <>
      <div className="upcoming-books-div">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="upcoming-book-img">
                <img src={bannerImg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 upcoming-book-detail">
              <div className="upcoming-book-text">
                <h3>Upcoming Book</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  vitae vel exercitationem odio minus. Eveniet illo ex,
                  distinctio sunt quidem molestiae dolores quis dolor minus
                  fugiat cupiditate? Ex, amet voluptates? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quod vitae vel
                  exercitationem odio minus. Eveniet illo ex, distinctio sunt
                  quidem molestiae dolores quis dolor minus fugiat cupiditate?
                  Ex, amet voluptates?
                </p>
                <button className="button">Notify Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingBooks;
