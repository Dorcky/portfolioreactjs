import React, { useState } from 'react';

const Navbar = () => {
    // Déclare un état pour gérer la visibilité du menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fonction pour fermer le menu lorsqu'un élément est cliqué
    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a className="navbar-brand text-white" href="#">WD</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                    aria-label="Toggle navigation"
                    onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle l'état
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#about" onClick={handleMenuClose}>À propos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services" onClick={handleMenuClose}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio" onClick={handleMenuClose}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#videos" onClick={handleMenuClose}>Vidéos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonials" onClick={handleMenuClose}>Témoignages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" onClick={handleMenuClose}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
