// import all things needed for app to use.
import React, { useState } from 'react';
import Navigation from "./navbar";
import About from "./about";
import Portfolio from "./portfolio";


function Header() {
const [currentPage, handlePageChange] = useState("About");

    
    const renderPage = () => {
    switch (currentPage) {
        case "About me":
        return <About />;
        case "Portfolio":
        return <Portfolio />;
        default:
        return <About />;
    }
    };

    return (
    <div>
        <nav className="navbar">
        <div className="navbar-brand">
            <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/tmcash">
                <span className="content is-large">Tyler Cash</span>
            </a>
            </div>
            </nav>
            
    <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
    />
    
    <main>
        <div>{renderPage(currentPage)}</div>
    </main>
    </div>
);
}

export default Header;