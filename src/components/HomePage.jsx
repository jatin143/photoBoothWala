import React from 'react';
import homeBanner from '../assets/homeBanner.png';
import logo from '../assets/logo.png';
import yellowLogo from '../assets/yellowLogo.png';
import footer from '../assets/footer.png';
import Facebook from '../assets/Facebook.png';
import Gmail from '../assets/Gmail.png';
import Instagram from '../assets/Instagram.png';
import LinkedIn from '../assets/LinkedIn.png';

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

const HomePage = () => {
    return (
        <>
            {/* HERO SECTION */}
            <section
                style={{
                    height: '96vh',
                    width: '100%',
                    backgroundImage: `url(${homeBanner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                }}
            >
                {/* Top Left Logo */}
                <img
                    src={logo}
                    alt="logo"
                    style={{
                        position: 'absolute',
                        top: '24px',
                        left: '32px',
                        width: '120px',
                        height: 'auto',
                    }}
                />

                {/* Top Right Location */}
                <div
                    style={{
                        position: 'absolute',
                        top: '35px',
                        right: '82px',
                        fontSize: '20px',
                        fontFamily: 'Montserrat-SemiBold',
                        color: '#DD0978',
                    }}
                >
                    Hyderabad
                </div>
            </section>

            {/* FOOTER / MAIN CONTENT SECTION */}
            <section
                style={{
                    height: '52vh',
                    backgroundImage: `
                        linear-gradient(to bottom, rgba(221, 9, 120, 0.7), transparent 50px),
                        url(${footer})
                    `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '60px 80px 30px 80px',
                    color: '#FFE802',
                }}
            >

                {/* CENTER CONTENT */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '24px',
                        textAlign: 'center',
                    }}
                >
                    <img
                        src={logo}
                        alt="Photobooth Wala"
                        style={{
                            width: '220px',
                            height: 'auto',
                        }}
                    />

                    <div
                        style={{
                            maxWidth: '700px',
                            fontSize: '20px',
                            lineHeight: '1.6',
                            fontFamily: 'Montserrat-Regular',
                        }}
                    >
                        Photo Booth Wala captures real expressions and unforgettable
                        moments at weddings, events, and celebrations.
                    </div>

                    <button
                        style={{
                            backgroundColor: '#FFE802',
                            color: '#172B82',
                            border: 'none',
                            padding: '12px 32px',
                            borderRadius: '6px',
                            fontSize: '16px',
                            fontFamily: 'Montserrat-SemiBold',
                            cursor: 'pointer',
                        }}
                        onClick={handleWhatsAppClick}
                    >
                        Contact us
                    </button>
                </div>

                {/* LOWER NAV + BRAND ROW */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '40px',
                    }}
                >
                    {/* Left Logo + Brand */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                        }}
                    >
                        <img
                            src={yellowLogo}
                            alt="yellow logo"
                            style={{
                                width: '60px',
                                height: 'auto',
                            }}
                        />
                        <div
                            style={{
                                fontSize: '20px',
                                fontFamily: 'Montserrat-SemiBold',
                                color: '#FFE802',
                            }}
                        >
                            Photo Booth Wala
                        </div>
                    </div>

                    {/* Right Navigation */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '30px',
                            fontSize: '16px',
                            fontFamily: 'Montserrat-Regular',
                            color: '#FFE802',
                        }}
                    >
                        <span
                            style={{
                                fontSize: '16px',
                                fontFamily: 'Montserrat-Regular',
                                color: '#FFE802',
                            }}>
                            Weddings
                        </span>
                        <span
                            style={{
                                fontSize: '16px',
                                fontFamily: 'Montserrat-Regular',
                                color: '#FFE802',
                            }}>
                            Events
                        </span>
                        <span
                            style={{
                                fontSize: '16px',
                                fontFamily: 'Montserrat-Regular',
                                color: '#FFE802',
                            }}>
                            Celebrations
                        </span>
                        <span
                            style={{
                                fontSize: '16px',
                                fontFamily: 'Montserrat-Regular',
                                color: '#FFE802',
                            }}>
                            Studio Moments
                        </span>
                    </div>
                </div>

                {/* BOTTOM COPYRIGHT + SOCIALS */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderTop: '1px solid #FFE802',
                        paddingTop: '26px',
                        marginTop: '16px',
                    }}
                >
                    <span style={{
                        fontSize: '16px',
                        fontFamily: 'Montserrat-Regular',
                    }}>
                        © 2026 Photo Booth Wala. All rights reserved.
                    </span>

                    <div
                        style={{
                            display: 'flex',
                            gap: '18px',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src={Facebook}
                            alt="facebook"
                            style={{
                                width: '20px',
                                transition: 'transform 0.2s ease',
                                cursor: 'pointer'
                            }}
                            onClick={handleFacebookClick} />
                        <img
                            src={Instagram}
                            alt="instagram"
                            style={{
                                width: '20px',
                                transition: 'transform 0.2s ease',
                                cursor: 'pointer'
                            }}
                            onClick={handleInstagramClick} />
                        <img
                            src={Gmail}
                            alt="gmail"
                            style={{
                                width: '20px',
                                transition: 'transform 0.2s ease',
                                cursor: 'pointer'
                            }}
                            onClick={handleGmailClick} />
                        {/* <img src={LinkedIn} alt="linkedin" style={{ width: '20px' }} /> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
