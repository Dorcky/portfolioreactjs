import React from 'react';

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center">
                        <img src="https://live.staticflickr.com/65535/54311913244_58717a1c24_b.jpg" alt="Wesky Dorcenna" className="img-fluid rounded-circle hero-img" style={{ width: '300px' }} />
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <h1 className="display-3 fw-bold mb-4">Wesky Dorcenna</h1>
                        <p className="lead mb-4">Développeur Web et Mobile</p>
                        <a href="#portfolio" className="btn btn-custom btn-lg">Voir mes projets</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;