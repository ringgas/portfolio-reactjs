import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Interests extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main">
                    <section id="Interests" className="services">
                        <div className="container">
                            <div className="section-title">
                                <h2>Interests</h2>
                                <br></br>
                                <p>The meeting place for project promoters and investors. Project promoters based in the EU can register initiatives and boost its visibility to a large network of international investors. In case of an investor looking for investment opportunities in areas such as energy efficiency, transport or renewable energies, the EIPP portal will offer them a broad choice of viable projects.</p>
                               <br></br>
                                <p>International call that allows cities to identify and select the best projects for the transformation of underutilized sites into beacons of sustainability and resiliency. For each site, the bidder teams will compete to buy or lease the site to implement their project (sale agreement, rental contract, lease-back, occupation, etc). At the end of the competition process, each site owner will organize the legal arrangement to finalize the site transfer. </p>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                                    <div className="icon"><i className="icofont-computer"></i></div>
                                    <h4 className="title"><Link to="">Desktop App</Link></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <div className="icon"><i className="icofont-chart-bar-graph"></i></div>
                                    <h4 className="title"><Link to="">Graphic Design</Link></h4>
                                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                    <div className="icon"><i className="icofont-earth"></i></div>
                                    <h4 className="title"><Link to="">Web App</Link></h4>
                                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                </div>
                              
                               
                            </div>
                        </div>
                    </section>
                   
                </main>
            </React.Fragment>
        );
    }
}

export default Interests;