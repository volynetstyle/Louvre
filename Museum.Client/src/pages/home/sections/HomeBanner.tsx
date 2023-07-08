import React from "react";

function HomeBanner() {
    return (      
        <div className="banner-area relative" id="home">
            <div className="overlay overlay-bg"></div>
            <div className="container">
                <div className="row fullscreen d-flex align-items-center justify-content-center home-banner-height">
                    <div className="banner-content col-lg-8">
                        <h6 className="text-white">Openning on 21st February, 2018</h6>
                        <h1 className="text-white">
                            Exhibition on Modern Era
                        </h1>
                        <p className="pt-20 pb-20 text-white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.  sed do eiusmod tempor incididunt..
                        </p>
                        <a href="#" className="primary-btn text-uppercase">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;