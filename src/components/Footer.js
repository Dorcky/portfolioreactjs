import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="py-3 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Wesky Dorcenna</h3>
                        <p>Développeur Web & Mobile</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Liens</h3>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://github.com/Dorcky" className="text-white" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} /> GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@deda3756" className="text-white" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@deda3756" className="text-white" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faYoutube} /> YouTube
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Contact</h3>
                        <p>Email: dorcennawesky@gmail.com</p>
                        <p>Téléphone: +1 4385092299</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;