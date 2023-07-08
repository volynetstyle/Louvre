import React from "react";
import { HomeBanner } from "./sections";

const ServiceContent =
    [
        {
            iconBostrap: "lnr lnr-clock",
            title: "Openning Hours",
            firstDesc: "Mon - Fri: 10.00am to 05.00pm Sat: 12.00pm to 03.00 pm Sunday Clo ",
            secondDesc: "Here, I focus on a range of items and features that we use in life Here, I focus on a range of items and features that we use in life Here, I focus on a range of items and features.that we use in life",
            textUppercase: "Buy ticket",
        },
        {
            iconBostrap: "lnr lnr-rocket",
            title: "Ongoing Exhibitions",
            firstDesc: "Mon - Fri: 10.00am to 05.00pm Sat: 12.00pm to 03.00 pm Sunday Closed",
            secondDesc: "Here, I focus on a range of items and features that we use in life Here, I focus on a range of items and features that we use in life Here, I focus on a range of items and features.that we use in life",
            textUppercase: "Buy ticket",
        },
        {
            iconBostrap: "lnr lnr-briefcase",
            title: "Openning Events",
            firstDesc: "Mon - Fri: 10.00am to 05.00pm Sat: 12.00pm to 03.00 pm Sunday Closed",
            secondDesc: "Here, I focus on a range of items and features that we use in life Here, I focus on a range of items and features that we use in life Here, I focus on a range of items and features.that we use in life",
            textUppercase: "Buy ticket",
        },
    ]

function HomePage() {
    return (
        <div>
            <HomeBanner />
        </div>
    );
}

export default HomePage;