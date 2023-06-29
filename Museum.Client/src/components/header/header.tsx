import React from 'react';
import TopHeader from './topheader';
import Logo from './logo';
import NavigationMenu from './navigationmenu';

function Header() {
    return (
        <header id="header">
            <TopHeader />
            <hr />
            <div className="container header-top">
                <div className="row align-items-center justify-content-between d-flex">
                    <Logo src="./../../assets/img/logo.png" alt="Logo" title="Website Logo" href="index.html" />
                    <NavigationMenu />
                </div>
            </div>
        </header>
    );
}

export default Header;
