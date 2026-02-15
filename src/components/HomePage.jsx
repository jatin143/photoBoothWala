import React, { useEffect, useState } from 'react';
import homeBanner from '../assets/homeBanner.jpg';
import mobileHome from '../assets/mobileHome.jpg';
import location from '../assets/location.png';
import logo from '../assets/logo.png';
import yellowLogo from '../assets/yellowLogo.png';
import footer from '../assets/footer.jpg';
import Facebook from '../assets/Facebook.png';
import Gmail from '../assets/Gmail.png';
import Instagram from '../assets/Instagram.png';
import '../css/homepage.css';

const handleWhatsAppClick = () => {
    window.open('https://wa.me/9849095573', '_blank');
};

const handleFacebookClick = () => {
    window.open('https://www.facebook.com/share/14VQXQvhSgR', '_blank');
};

const handleInstagramClick = () => {
    window.open('https://www.instagram.com/photoboothwala.in?utm_source=qr&igsh=MWpmam93cW1tam1hNg==', '_blank');
};

const handleGmailClick = () => {
    window.location.href = 'mailto:photoboothwala.in@gmail.com';
};

const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/92wTmrPvYfavXg72A?g_st=awb', '_blank');
};

const HomePage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 913);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 913);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <section className="hero-section">
                <img
                    src={isMobile ? mobileHome : homeBanner}
                    alt=""
                    className="hero-bg"
                    fetchpriority="high"
                />

                <img src={logo} alt="logo" className="hero-logo" />

                <div className="hero-location" onClick={handleLocationClick}>
                    <span className="location-text">Hyderabad</span>
                    <img src={location} alt="location" className="location-icon" />
                </div>
            </section>


            <section
                className="footer-section"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(221, 9, 120, 0.7), transparent 50px), url(${footer})`,
                }}
            >
                <div className="center-content">
                    <img src={logo} alt="Photobooth Wala" className="center-logo" />

                    <div className="center-text">
                        Photo Booth Wala captures real expressions and unforgettable
                        moments at weddings, events, and celebrations.
                    </div>

                    <button
                        className="contact-btn"
                        onClick={handleWhatsAppClick}
                    >
                        Contact us
                    </button>
                </div>
                <div className="brand-nav-row">
                    <div className="brand-left">
                        <img src={yellowLogo} alt="yellow logo" className="yellow-logo" />
                        <div className="brand-name">Photo Booth Wala</div>
                    </div>

                    <div className="nav-links">
                        <span>Weddings</span>
                        <span>Events</span>
                        <span>Celebrations</span>
                        <span>Studio Moments</span>
                    </div>
                </div>
                <div className="bottom-row">
                    <span className="copyright">
                        © 2026 Photo Booth Wala. All rights reserved.
                    </span>
                    <div className="social-icons">
                        <img src={Facebook} alt="facebook" onClick={handleFacebookClick} />
                        <img src={Instagram} alt="instagram" onClick={handleInstagramClick} />
                        <img src={Gmail} alt="gmail" onClick={handleGmailClick} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
