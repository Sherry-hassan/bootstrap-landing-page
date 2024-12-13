import React, { useState } from 'react';
import '../components/style.css'
import groupImg from '../assets/images/Group.png'
import iconImg from '../assets/images/Icon.png'
import featureImg from '../assets/images/main.png'
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'
import fbImg from '../assets/images/fb.png'
import inImg from '../assets/images/in.png'
import twitterImg from '../assets/images/twitter.png'
import utubeImg from '../assets/images/utube.png'
import instaImg from '../assets/images/Instagram.png'


const cardData = [
    {
        id: 1,
        img: card1,
        title: 'Light, Fast & Powerful',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aeneanmassa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donecquam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 2,
        img: card2,
        title: 'Light, Fast & Powerful',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aeneanmassa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donecquam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 3,
        img: card3,
        title: 'Light, Fast & Powerful',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aeneanmassa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donecquam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        hasButton: true,
    },
];

const Boot = () => {
    return (
        <>
            <div className='navbar  container col-12'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button className='buy-now' >Purchase Item</button>
                <button className='buy-now'>Login</button>
            </div>
            <div className="container-fluid main-section ">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-xl-8 col-md-12 mt-md-5 col-sm-12 col-xs-12 hero-section ">
                        <h1 className="fw-bold">Introduce Your Product<br></br> Quickly & Efficiently</h1>
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.
                        </p>
                        <p className="text-muted">
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                        <div className=" hero-button gap-3">
                            <button className=" purchase-btn">Purchase UI Kit</button>
                            <button className=" light-button">Learn More</button>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12  col-sm-12 col-xs-12 img-container text-center">
                        <img src={groupImg} alt="Hero" className="img-fluid hero-img" />
                    </div>
                </div>
            </div >
            <div className="container card-container d-xl-flex d-lg-flex">
                <div className="row features-section">
                    {/* Text Section */}
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 features-text ">
                        <h2 className="fw-bold mb-4">Light, Fast & Powerful</h2>
                        <h6 className="text-muted">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </h6>
                    </div>


                    <div className=" features-card d-xl-flex d-lg-flex  ">
                        <div className="feature-card col-xl-6 col-lg-6  col-md-12 col-sm-12 col-12 me-3">
                            <img src={iconImg} alt="Featured Icon 1" className="mb-3" />
                            <h3 className="fw-bold">Title Goes Here</h3>
                            <h6 className="text-muted">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            </h6>
                        </div>
                        <div className="feature-card  col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <img src={iconImg} alt="Feature Icon 2" className="mb-3" />
                            <h3 className="fw-bold">Title Goes Here</h3>
                            <h6 className="text-muted">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            </h6>
                        </div>
                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 feature-img">
                        <img src={featureImg} alt="Feature Img" className='img-md-sm-fluid' />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row g-4 info-container">
                    {cardData.map((card) => (
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 info-card" key={card.id}>
                            <div className="card h-100 " style={{ border: "none", boxShadow: "none" }}>
                                <div className="row g-0">

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="info-img me-5">
                                            <img src={card.img} alt={`Card ${card.id}`} className="card-img-top img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="card-body">
                                            <h2 className="card-title h5">{card.title}</h2>
                                            <h6 className="card-description text-muted">{card.description}</h6>
                                            {card.hasButton && (
                                                <button className="button-primary mt-3">Purchase Now</button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container-fluid">
                <div className="row pricing-container">

                    <div className="col-12 text-center">
                        <div className="pricing-text">
                            <h2>A Price To Suit Everyone</h2>
                            <h6>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            </h6>
                        </div>
                    </div>


                    <div className="col-12 text-center">
                        <div className="pricing-design">
                            <h3>$40</h3>
                            <h5>UI Design Kit</h5>
                        </div>
                    </div>


                    <div className="col-12 text-center">
                        <div className="pricing-button">
                            <p>See, One price. Simple.</p>
                            <button className="btn btn-primary">Purchase UI Kit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-section">
                <div className="container">
                    <div className="row footer-container">

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 footer-wrapper">
                            <p>new Company</p>
                            <h2>Landing</h2>
                            <button className="btn btn-primary">Purchase Now</button>
                        </div>


                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 footer-wrapper">
                            <div className="footer-wrapper-content">
                                <ul className="list-unstyled">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>


                            <div className="footer-icons-list  ">
                                <a href="#" className="me-3">
                                    <img src={fbImg} alt="fb-icon" />
                                </a>
                                <a href="#" className="me-3">
                                    <img src={inImg} alt="in-icon" />
                                </a>
                                <a href="#" className="me-3">
                                    <img src={twitterImg} alt="twitter-icon" />
                                </a>
                                <a href="#" className="me-3">
                                    <img src={utubeImg} alt="youtube-icon" />
                                </a>
                                <a href="#" className="me-3">
                                    <img src={instaImg} alt="instagram-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Boot


