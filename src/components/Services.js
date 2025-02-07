import React from 'react';

const Services = () => {
    return (
        <section id="services" className="py-5">
            <div className="container">
                <h2 className="section-title text-center">Mes Services</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 text-center p-4">
                            <img src="https://live.staticflickr.com/65535/54312204965_d539680b8f_b.jpg" alt="Service 1" className="card-img-top service-img" />
                            <div className="card-body">
                                <h3 className="h4 mb-3">Développement Mobile</h3>
                                <p>Création d'applications mobiles natives et cross-platform</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 text-center p-4">
                            <img src="https://live.staticflickr.com/65535/54311786491_2050f8fb15_b.jpg" alt="Service 2" className="card-img-top service-img" />
                            <div className="card-body">
                                <h3 className="h4 mb-3">Développement Web</h3>
                                <p>Conception de sites web modernes et réactifs</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 text-center p-4">
                            <img src="https://live.staticflickr.com/65535/54312215630_775dd4b0dd_w.jpg" alt="Service 3" className="card-img-top service-img" />
                            <div className="card-body">
                                <h3 className="h4 mb-3">Design UI/UX</h3>
                                <p>Design d'interfaces utilisateur intuitives et attractives</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;