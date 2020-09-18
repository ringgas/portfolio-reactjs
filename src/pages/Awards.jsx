import React, { Component } from 'react';

class Awards extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main">
                    <section id="awards" className="portfolio section-bg">
                        <div className="container">
                            <div className="section-title">
                                <h2>Awards</h2>
                                <br></br>
                                <p>as for several certificate awards and others as follows.</p>
                            </div>
                            <div className="row" data-aos="fade-up">
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <ul id="portfolio-flters">
                                        <li data-filter="*" className="filter-active">Certificate</li>
                                        <li data-filter=".filter-web">Web</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""></img>
                                        <div className="portfolio-links">
                                          <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                                          <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                      <div className="portfolio-wrap">
                                          <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""></img>
                                          <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                          </div>
                                      </div>
                                </div>
                            
                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""></img>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                              
                             
                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""></img>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}

export default Awards;