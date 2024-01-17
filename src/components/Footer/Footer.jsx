import React from 'react' 
import './Footer.css'

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">

                {/*left side */}
                <div className="flexColStart f-left">
                    <span className='primaryText'>LOGO</span>
                    <span className='secondaryText'>Lorem ipsum dolor sit
                    <br/> amet consectet</span>
                </div>

                {/*right side */}
                <div className="flexColStart f-right">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>Bhaktapur, Nepal</span>
                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>About us</span>
                        <span>Services</span>
                        <span>Contact</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
