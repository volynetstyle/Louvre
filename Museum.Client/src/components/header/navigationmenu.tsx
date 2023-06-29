import React from "react";
import { INavigationMenu } from "../../types/interfaces/INavigationMenu";

const NavigationMenu: React.FC<INavigationMenu> = (props) => {
  return (
    <nav id="nav-menu-container">
      <ul className="nav-menu">
        <li className="menu-active"><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="event.html">Events</a></li>
        <li><a href="ticket.html">Ticket</a></li>
        <li><a href="blog-home.html">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="contact.html">Security & Privacy</a></li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
