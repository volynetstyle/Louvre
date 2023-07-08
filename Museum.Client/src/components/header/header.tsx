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
                    <Logo src="https://cdn-icons-png.flaticon.com/512/3199/3199923.png"
                        alt="Logo"
                        title="Website Logo"
                        href="/" />
                    <NavigationMenu />
                </div>
            </div>
        </header>
    );
}

export default Header;
