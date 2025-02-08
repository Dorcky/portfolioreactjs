import React from 'react';

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-5"style={{ marginTop: '-50px' }}>
            <div className="container">
                <h2 className="section-title text-center">Mes Projets</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://live.staticflickr.com/65535/54311976618_15ebbf06a2_b.jpg" className="card-img-top project-img" alt="FindMyPro" />
                            <div className="card-body">
                                <h5 className="card-title">FindMyPro</h5>
                                <p className="card-text">Application mobile iOS et Web React Js pour trouver des professionnels</p>
                                <a href="https://findmypro.vercel.app/" className="btn btn-custom" target="_blank">Voir le projet</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://live.staticflickr.com/65535/54312155495_fbcfbf3a60_b.jpg" className="card-img-top project-img" alt="PizzaMia" />
                            <div className="card-body">
                                <h5 className="card-title">PizzaMia</h5>
                                <p className="card-text">Application e-commerce pour la vente de pizzas</p>
                                <a href="https://youtu.be/h8ZvK2lTfmw" target="_blank" className="btn btn-custom">Voir le projet</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://live.staticflickr.com/65535/54310902767_c446d37175_b.jpg" className="card-img-top project-img" alt="E-commerce" />
                            <div className="card-body">
                                <h5 className="card-title">Le Catalogueur</h5>
                                <p className="card-text">Première expérience avec HTML et CSS</p>
                                <a href="https://laboratoire-finale.vercel.app/index.html" target="_blank" className="btn btn-custom">Voir le projet</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;