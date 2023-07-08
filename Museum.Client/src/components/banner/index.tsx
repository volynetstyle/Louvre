import React from "react";

function GeneralBanner() {
    return (
        <div className="banner-area relative" id="home">
            <div className="overlay overlay-bg"></div>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="about-content col-lg-12">
                        <h1 className="text-white">
                            Elements
                        </h1>
                        <p className="text-white link-nav">
                            <a href="index.html">Home </a>
                            <span className="lnr lnr-arrow-right"></span>
                            <a href="elements.html"> Elements</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralBanner;