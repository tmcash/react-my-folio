import React, { useState } from 'react';
import Navigation from "./navbar";
import About from "./about";
import Portfolio from "./portfolio";
import Resume from "./resume";
import Contact from "./contact";

function Header() {
const [currentPage, handlePageChange] = useState("About");


    const renderPage = () => {
    switch (currentPage) {
        case "About me":
        return <About />;

        case "Portfolio":
        return <Portfolio />;

        case "Resume":
        return <Resume />;

        case "Contact":
        return <Contact />;

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
            href="https://github.com/Bwardle01?tab=repositories">
                <span className="content is-large">Bronson Wardle</span>
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