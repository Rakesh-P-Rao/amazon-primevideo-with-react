import React, { Component, Fragment } from "react";
import "./HomeComponent.styles.css";
import { Link } from "react-router-dom";
class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <section>
          <div className="card bg-dark text-white">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay">
              <h5 className="card-title">Welcome to Prime Video</h5>
              <p className="card-text">
                Join Prime to watch the latest movies, <br /> TV shows and
                award-winning Amazon Originals
              </p>
              <Link to="/register" className="btn btn-primary">
                Start your 30-day free trail
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="card bg-dark text-white">
            <img
              src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-Living-Room-V2._CB524587855_SY1200_FMJPG_.jpg"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay text-right">
              <h5 className="card-title">Great Entertainment</h5>
              <p className="card-text">
                With your Prime membership, you have access to exclusive Amazon
                Originals, <br /> blockbuster Bollywood movies, regional movies
                and more.
              </p>
              <Link to="/register" className="btn btn-primary">
                Get started
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="card bg-dark text-white">
            <img
              src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/PRIME_multi-benefit_MAGNET_2X._CB1519820207_SY1200_FMJPG_.jpg"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay">
              <h5 className="card-title">One membership, many benefits</h5>
              <p className="card-text">
                Your Prime membership now also includes ad-free music <br />{" "}
                along with unlimited free, fast delivery on eligible items,{" "}
                <br /> exclusive access to deals & more.
              </p>
              <Link to="/register" className="btn btn-primary">
                Get started
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="card bg-dark text-white">
            <img
              src=" https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_Template_Image_Left._SY1200_FMJPG_.jpg"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay text-right">
              <h5 className="card-title">Even better with Fire TV Stick</h5>
              <p className="card-text">
                The biggest movies and TV shows are always better on a big
                screen. <br /> Simply plug in your Amazon Fire TV Stick and
                stream on any HDTV. <br /> Press the voice button on the remote
                and say the name
                <br /> of the title you want to watch to find it in seconds.
              </p>
              <Link to="/register" className="btn btn-primary">
                Get started
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="card-group" style={{ border: "none", margin: "0" }}>
            <div className="card">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Devices.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Watch anywhere</h5>
                <p className="card-text">
                  Enjoy from the web or with the Prime Video app on your phone,
                  tablet, or select Smart TVs — on up to 3 devices at once.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Download_IN.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Download and go</h5>
                <p className="card-text">
                  Watch offline on the Prime Video app when you download titles
                  to your iPhone, iPad, Tablet, or Android device.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/300x300_Tile_1.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Data Saver</h5>
                <p className="card-text">
                  Control data usage while downloading and watching videos on
                  select phones or tablets.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="card bg-dark text-white">
            <img
              src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-kids-30Jan._CB1517304519_SY1200_FMJPG_.jpg"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay">
              <h1 className="card-title">Family Friendly</h1>
              <p className="card-text text-bolder">
                With easy to use Parental Controls and a dedicated kids page,
                <br />
                enjoy secure, ad-free kids entertainment. Kids can enjoy <br />{" "}
                popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota
                Bheem.
              </p>
              <Link to="/register" className="btn btn-primary">
                Get started
              </Link>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted">
                <span className="text-primary">
                  Terms and Privacy Notice Send us feedback Help
                </span>
                <span>© 1996-2020, Amazon.com, Inc. or its affiliates</span>
              </small>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default HomeComponent;
