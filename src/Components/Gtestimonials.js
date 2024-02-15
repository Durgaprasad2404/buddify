import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}
function HowitWork() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="py-3" id="testimonials">
      <h1 className="heading-main my-3">Testimonials</h1>
      <div className="slider-container px-5">
        <Slider {...settings}>
          <div className=" text-center">
            <div className="my-3 title-con">
              <h3 className="title">1</h3>
              <div className="content">
                <img src="./images/user.jpg" alt="" className="user-img" />
                <p>
                  Hi Everyone. I hope you are all enjoying today's program and
                  have had the opportunity to visit the different stations. It
                  always warms my heart to come to a Friendship Circle program
                  and see all of the participants and how they've grown, both
                  physically and emotionally
                </p>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <div className="my-3 title-con">
              <h3 className="title">2</h3>
              <div className="content">
                <img src="./images/user.jpg" alt="" className="user-img" />
                <p>
                  Hi Everyone. I hope you are all enjoying today's program and
                  have had the opportunity to visit the different stations. It
                  always warms my heart to come to a Friendship Circle program
                  and see all of the participants and how they've grown, both
                  physically and emotionally
                </p>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <div className="my-3 title-con">
              <h3 className="title">3</h3>
              <div className="content">
                <img src="./images/user.jpg" alt="" className="user-img" />
                <p>
                  Hi Everyone. I hope you are all enjoying today's program and
                  have had the opportunity to visit the different stations. It
                  always warms my heart to come to a Friendship Circle program
                  and see all of the participants and how they've grown, both
                  physically and emotionally
                </p>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <div className="my-3 title-con">
              <h3 className="title">4</h3>
              <div className="content">
                <img src="./images/user.jpg" alt="" className="user-img" />
                <p>
                  Hi Everyone. I hope you are all enjoying today's program and
                  have had the opportunity to visit the different stations. It
                  always warms my heart to come to a Friendship Circle program
                  and see all of the participants and how they've grown, both
                  physically and emotionally
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="my-3 title-con">
              <h3 className="title">5</h3>
              <div className="content">
                <img src="./images/user.jpg" alt="" className="user-img" />
                <p>
                  Hi Everyone. I hope you are all enjoying today's program and
                  have had the opportunity to visit the different stations. It
                  always warms my heart to come to a Friendship Circle program
                  and see all of the participants and how they've grown, both
                  physically and emotionally
                </p>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <div className="my-3 title-con">
              <h3 className="title">6</h3>
              <div className="content">
                <img src="./images/user.jpg" alt="" className="user-img" />
                <p>
                  Hi Everyone. I hope you are all enjoying today's program and
                  have had the opportunity to visit the different stations. It
                  always warms my heart to come to a Friendship Circle program
                  and see all of the participants and how they've grown, both
                  physically and emotionally
                </p>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <div className="my-3 title-con">
              <h3 className="title">7</h3>
              <div className="content">
                <img src="./images/user.jpg" alt="" className="user-img" />
                <p>
                  Hi Everyone. I hope you are all enjoying today's program and
                  have had the opportunity to visit the different stations. It
                  always warms my heart to come to a Friendship Circle program
                  and see all of the participants and how they've grown, both
                  physically and emotionally
                </p>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <div className="my-3 title-con">
              <h3 className="title">8</h3>
              <div className="content">
                <img src="./images/user.jpg" alt="" className="user-img" />
                <p>
                  Hi Everyone. I hope you are all enjoying today's program and
                  have had the opportunity to visit the different stations. It
                  always warms my heart to come to a Friendship Circle program
                  and see all of the participants and how they've grown, both
                  physically and emotionally
                </p>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <div className="my-3 title-con">
              <h3 className="title">9</h3>
              <div className="content">
                <img src="./images/user.jpg" alt="" className="user-img" />
                <p>
                  Hi Everyone. I hope you are all enjoying today's program and
                  have had the opportunity to visit the different stations. It
                  always warms my heart to come to a Friendship Circle program
                  and see all of the participants and how they've grown, both
                  physically and emotionally
                </p>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <div className="my-3 title-con">
              <h3 className="title">10</h3>
              <div className="content">
                <img src="./images/user.jpg" alt="" className="user-img" />
                <p>
                  Hi Everyone. I hope you are all enjoying today's program and
                  have had the opportunity to visit the different stations. It
                  always warms my heart to come to a Friendship Circle program
                  and see all of the participants and how they've grown, both
                  physically and emotionally
                </p>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <div className="my-3 title-con">
              <h3 className="title">11</h3>
              <div className="content">
                <img src="./images/user.jpg" alt="" className="user-img" />
                <p>
                  Hi Everyone. I hope you are all enjoying today's program and
                  have had the opportunity to visit the different stations. It
                  always warms my heart to come to a Friendship Circle program
                  and see all of the participants and how they've grown, both
                  physically and emotionally
                </p>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <div className="my-3 title-con">
              <h3 className="title">12</h3>
              <div className="content">
                <img src="./images/user.jpg" alt="" className="user-img" />
                <p>
                  Hi Everyone. I hope you are all enjoying today's program and
                  have had the opportunity to visit the different stations. It
                  always warms my heart to come to a Friendship Circle program
                  and see all of the participants and how they've grown, both
                  physically and emotionally
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default HowitWork;
