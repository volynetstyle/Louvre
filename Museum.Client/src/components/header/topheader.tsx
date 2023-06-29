import React from 'react';


const TopHeader: React.FC = () => {
  return (
    <div className="container header-top">
      <div className="row">
        <div className="col-6 top-head-left">
          <ul>
            <li><a href="#">Visit Us</a></li>
            <li><a href="#">Buy Ticket</a></li>
          </ul>
        </div>
        <div className="col-6 top-head-right">
          <ul>
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
            <li><a href="#"><i className="fa fa-behance"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
