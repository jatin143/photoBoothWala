import React from 'react';
import homeBanner from '../assets/homeBanner.png';
import logo from '../assets/logo.png';
import footer from '../assets/footer.png';

const HomePage = () => {
    return (
        <>
            <section
                style={{
                    height: '95vh',
                    width: '100%',
                    backgroundImage: `url(${homeBanner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <img
                    src={logo}
                    alt="logo"
                    style={{
                        position: 'absolute',
                        top: '24px',
                        left: '32px',
                        width: '120px', // adjust
                        height: 'auto',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        color: '#DD0978',
                        top: '35px',
                        right: '82px',
                        width: '120px',
                        fontSize: '20px',
                        fontFamily: 'Montserrat-SemiBold',
                        height: 'auto',
                    }}
                >
                    Hyderabad
                </div>
            </section>
            <section
                style={{
                    height: '50vh',
                    backgroundImage: `
      linear-gradient(to bottom, rgba(221, 9, 120, 0.75), transparent 50px),
      url(${footer})
    `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
            </section>
        </>

    );
};

export default HomePage;
