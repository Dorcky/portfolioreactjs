import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-5">
            <div className="container">
                <h2 className="section-title text-center">Témoignages</h2>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <blockquote className="mb-0">
                                    <p>"Wesky est un développeur exceptionnel. Sa capacité à comprendre rapidement les besoins et à résoudre des problèmes complexes avec des solutions simples est impressionnante."</p>
                                    <footer className="text-end">- Stanley Plonquet</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <blockquote className="mb-0">
                                    <p>"Travailler avec Wesky a été une expérience enrichissante. Il maîtrise parfaitement les technologies qu'il utilise et il sait s'adapter à n'importe quelle situation."</p>
                                    <footer className="text-end">- Ryan Coutard</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;