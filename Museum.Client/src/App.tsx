import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import './assets/css/linearicons.css';
import './assets/css/owl.carousel.css';
import './assets/css/font-awesome.min.css';
import './assets/css/nice-select.css';
import './assets/css/magnific-popup.css';
import './assets/css/bootstrap.css';
import './assets/css/main.css';

function App() {
    return (
        <BrowserRouter>
            <Router />
            <script src="./assets/js/vendor/jquery-2.2.4.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                crossOrigin="anonymous"></script>
            <script src="./assets/js/vendor/bootstrap.min.js"></script>
            <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>
            <script src="./assets/js/easing.min.js"></script>
            <script src="./assets/js/hoverIntent.js"></script>
            <script src="./assets/js/superfish.min.js"></script>
            <script src="./assets/js/jquery.ajaxchimp.min.js"></script>
            <script src="./assets/js/jquery.magnific-popup.min.js"></script>
            <script src="./assets/js/owl.carousel.min.js"></script>
            <script src="./assets/js/imagesloaded.pkgd.min.js"></script>
            <script src="./assets/js/justified.min.js"></script>
            <script src="./assets/js/jquery.sticky.js"></script>
            <script src="./assets/js/jquery.nice-select.min.js"></script>
            <script src="./assets/js/parallax.min.js"></script>
            <script src="./assets/js/mail-script.js"></script>
            <script src="./assets/js/main.js"></script>
        </BrowserRouter>
    );
}

export default App;



