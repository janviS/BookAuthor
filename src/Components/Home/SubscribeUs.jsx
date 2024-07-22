import subscribeImg from "../../assets/susbcribe-image.png";

const SubscribeUs = () => {
  return (
    <>
      <div className="subscribe-div">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 subscribe-div-text">
              <div className="subscribe-div-input">
                <h3>Subscribe now to get regular updates</h3>
                <input type="text" placeholder="Your Email" />{" "}
                <button className="button">Submit</button>
              </div>
            </div>
            <div className="col-lg-5 subscribe-img">
              <div className="subscribe-div-img">
                <img src={subscribeImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeUs;
